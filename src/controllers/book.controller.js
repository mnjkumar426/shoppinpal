const Error = require("../helpers/error.helper")
const Book = require("../models/book.model")
exports.getAll = async (req, res, next) => {
    try {
        let books =  await Book.find({});
        res.json(books)

    } catch (error) {
        next(Error.AppEror(error.message))
    }


}
exports.create = async (req, res, next) => {
    let body = req.body;
    book = new Book(body);
    try {
        let books = await book.save();
        res.json({ status: true, books })
    } catch (error) {
        next(Error.AppEror(error.message))
    }

}
exports.update = async (req, res, next) => {
    let id = req.params.id;
    let body = req.body
    try {
        let update = await Book.findOneAndUpdate({ _id: id }, { $set: body })
        if (update)
            res.json({ status: true, message: "Updated Successfully" })
        else next(Error.NotFoud(`${id} not found`))
    } catch (error) {
        console.log(error)
        next(Error.AppEror(error.message))

    }

}
exports.delete = async(req, res, next) => {
    let id = req.params.id;
    try {
      let remove = await  Book.findByIdAndDelete(id);
      console.log(remove)
      if(remove)   res.json({ status: true, message: "Deleted Successfully" })
      else next(Error.NotFoud(`${id} Not found`))
    } catch (error) {
        next(Error.AppEror(error.message))

        
    }
    


}