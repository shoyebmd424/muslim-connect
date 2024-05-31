const Gigs = require("../Model/Gigs");
const Notification = require("../Model/Notification");

exports.CreateGigs = async (req, res) => {
  try {
    let { gigsImages, keyword, ...other } = req.body;
    let images = [];
    for (let i = 0; i < req?.files?.length; i++) {
      images?.push({
        file: "/gigs/image/" + req?.files[i]?.originalname,
        type: req?.files[i]?.mimetype,
      });
    }
    req.body = other;
    req.body.gigsImages = images;
    req.body.keyword = keyword ? keyword?.split(",") : [];
    console.log(req?.body?.keyword);
    const gig = await new Gigs(req.body).save();
    if (gig) {
      gig.status = "create";
    }
    await new Notification({ modelId: gig?._id, title: gig?.title }).save();
    res.status(201).json("Gigs created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.updateGigs = async (req, res) => {
  try {
    const gigs = await Gigs.findById(req.params.id);
    if (!gigs) {
      res.status(404).json({ message: "invalid Gigs id" });
    }
    await Gigs.findByIdAndUpdate(req.params.id);
    res.status(201).json("Gigs updated");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.deleteGigs = async (req, res) => {
  try {
    const gigs = await Gigs.findById(req.params.id);
    if (!gigs) {
      res.status(404).json({ message: "invalid Gigs id" });
    }
    await Gigs.findByIdAndDelete(req.params.id);
    res.status(201).json("Gigs deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getOneGigs = async (req, res) => {
  try {
    const gigs = await Gigs.findById(req.params.id);
    res.status(201).json(gigs);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getAllGigss = async (req, res) => {
  try {
    const gigs = await Gigs.find();
    res.status(201).json(gigs);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

exports.getAllGigsByUserId = async (req, res) => {
  try {
    console.log(req.params.id);
    const gigs = await Gigs.find({ userId: req.params.id });
    res.status(200).json(gigs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.filterGigs = async (req, res) => {
  try {
    const { location, category, priceMin, priceMax, keywords } = req.query;
    const filter = {};
    if (location) filter.location = location;
    if (category) filter.category = category;
    if (priceMin) filter.price = { ...filter.price, $gte: Number(priceMin) };
    if (priceMax) filter.price = { ...filter.price, $lte: Number(priceMax) };

    if (keywords) {
      const keywordArray = keywords.split(",").map((keyword) => keyword.trim());
      const regexArray = keywordArray.map(
        (keyword) => new RegExp(keyword, "i")
      );
      filter.$or = [
        { title: { $in: regexArray } },
        { content: { $in: regexArray } },
        { theme: { $in: regexArray } },
        { keyword: { $in: regexArray } },
        { collective: { $in: regexArray } },
        { serviceType: { $in: regexArray } },
        { whyService: { $in: regexArray } },
      ];
    }
    const gigs = await Gigs.find(filter);
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
