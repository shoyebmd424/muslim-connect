const Card = require("../Model/PaymentCard");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
exports.CreateCard = async (req, res) => {
  try {
    await new Card(req.body).save();
    res.status(201).json("Card created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.updateCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      res.status(404).json({ message: "invalid Card id" });
    }
    await Card.findByIdAndUpdate(req.params.id);
    res.status(201).json("Card updated");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "invalid Card id" });
    }
    await Card.findByIdAndDelete(req.params.id);
    res.status(201).json("Card deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getOneCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.status(201).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getAllCards = async (req, res) => {
  try {
    const card = await Card.find();
    res.status(201).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

exports.getCardsByUserId = async (req, res) => {
  try {
    const card = await Card.find({ userId: req.params.id });
    res.status(201).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.makePayment = async (req, res) => {
  const { items, currency = "usd" } = req.body;

  try {
    const amount =
      items.reduce((total, item) => total + item.price * item.quantity, 0) *
      100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  stripe card

/* ---------------------------------------------------------------------- */

exports.attackPayment = async (req, res) => {
  const { paymentMethod } = req.body;

  const customerId = "cus_Q7m0V0qhq9rCPP";

  try {
    const customer = await createStripeCustomer({
      email: "email@gmail.com",
      name: "email",
      password: "password",
      phone: "34567890",
    });
    if (!customer) {
      return res
        .status(404)
        .json({ message: "Account adding problem please try again" });
    }
    const method = await attachMethod({
      paymentMethod,
      customerId: customer.id,
    });
    console.log(method);
    res.status(200).json({ message: "Payment method attached succesully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Could not attach method" });
  }
};

/* ---------------------------------------------------------------------- */

exports.getCardFromStrip = async (req, res) => {
  /* Query database to fetch Stripe Customer Id of current logged in user */
  const customerId = "cus_Q7m0V0qhq9rCPP";

  try {
    const paymentMethods = await listCustomerPayMethods(customerId);
    res.status(200).json(paymentMethods);
  } catch (err) {
    console.log(err);
    res.status(500).json("Could not get payment methods");
  }
};

/* ---------------------------------------------------------------------- */

exports.createPayment = async (req, res) => {
  const { paymentMethod } = req.body;

  /* Query database for getting the payment amount and customer id of the current logged in user */

  const amount = 1000;
  const currency = "INR";
  const userCustomerId = "cus_Q7m0V0qhq9rCPP";

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: currency,
      customer: userCustomerId,
      payment_method: paymentMethod,
      confirmation_method: "manual", // For 3D Security
      description: "Buy Product",
    });

    /* Add the payment intent record to your datbase if required */
    res.status(200).json(paymentIntent);
  } catch (err) {
    console.log(err);
    res.status(500).json("Could not create payment");
  }
};

/* ---------------------------------------------------------------------- */

exports.confirmPayment = async (req, res) => {
  const { paymentIntent, paymentMethod } = req.body;
  try {
    const intent = await stripe.paymentIntents.confirm(paymentIntent, {
      payment_method: paymentMethod,
      return_url: process.env.clientUrl + "/make-payment",
    });

    /* Update the status of the payment to indicate confirmation */
    res.status(200).json(intent);
  } catch (err) {
    console.error(err);
    res.status(500).json("Could not confirm payment");
  }
};

/* ---------------------------------------------------------------------- */

/* Helper Functions  ----------------------------------------------------------------------------------------------------- */

async function createStripeCustomer({ name, email, phone }) {
  return new Promise(async (resolve, reject) => {
    try {
      const Customer = await stripe.customers.create({
        name: name,
        email: email,
        phone: phone,
      });

      resolve(Customer);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

async function listCustomerPayMethods(customerId) {
  return new Promise(async (resolve, reject) => {
    try {
      const paymentMethods = await stripe.customers.listPaymentMethods(
        customerId,
        {
          type: "card",
        }
      );
      resolve(paymentMethods);
    } catch (err) {
      reject(err);
    }
  });
}

function attachMethod({ paymentMethod, customerId }) {
  return new Promise(async (resolve, reject) => {
    try {
      const paymentMethodAttach = await stripe.paymentMethods.attach(
        paymentMethod.id,
        {
          customer: customerId,
        }
      );
      resolve(paymentMethodAttach);
    } catch (err) {
      reject(err);
    }
  });
}
