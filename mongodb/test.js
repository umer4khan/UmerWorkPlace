var mongoose = require("mongoose");

// make a connection
mongoose
  .connect("mongodb://localhost:27017/tutorialkart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

var bookSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});
var Book = new mongoose.model("Book", bookSchema);
const createDocument = async () => {
  try {
    var book1 = new Book({
      name: "mean",
      price: 60,
      quantity: 10,
    });
    var book2 = new Book({
      name: "java",
      price: 40,
      quantity: 20,
    });
    var book3 = new Book({
      name: "angular",
      price: 550,
      quantity: 30,
    });
    const result = await Book.insertMany([book1,book2,book3]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
