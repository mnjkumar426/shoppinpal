const Book=require("../models/book.model")
exports.getAll=async()=>{
    try {
      return await Book.find({});
        
        
    } catch (error) {
        return error
        
    }

}

exports.create =async (book)=>{
    
    

   
}
