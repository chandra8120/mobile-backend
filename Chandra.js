import Chandra from "./ChandraModel.js";

const ChandraController = {
  createChandra: async (req, res) => {
    try {
      const { name, price, image } = req.body;

      // Validate if required fields are present in the request body
      if (!name || !price || !image) {
        return res.status(400).json({ message: 'Name, price, and image are required fields' });
      }

      const newChandra = new Chandra({
        name,
        price,
        image,
      });

      await newChandra.save();

      res.status(201).json({ message: 'Chandra item created successfully', newChandra });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

export default ChandraController;
