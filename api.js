

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type : String}
})

module.exports = mongoose.model("user" , userSchema)


// create api

const createUser = async function(req,res){
    try{

        let data = req.body
        let savedData = await UserModel.create(data)
        return res.status(201).send({status : true , data : savedData})

    }
    catch(error){
        return res.status(500).send({error: error.message})
    }
}
module.exports.createUser = createUser


// ===================get ===========================

const getUser = async function(res,res){
    try{
      let data = req.query;


    }
    catch(error){
        return res.status(500).send({status : false , message: error.message})
    }
}


const getStudentById = async (req, res) => {
    try {
        let id = req.params.studentId
        if (!id) return res.status(404).send({ status: false, message: "Student id require in param " })
        let student = await studentModel.findById(id)
        if (!isValidObjectId(id)) return res.status(400).send({ status: false, message: "Student by this id is not present" })
        return res.status(200).send({ status: true, data: student })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}


const getStudent = async (req, res) => {
    try {
        let query = req.query
        // const {name, marks,subject} = query
        if (query) {
            // let name = query.name
            let students = await studentModel.find({ $and: [query , { isDeleted: false }] })
           

           return students.length == 0  ?  res.status(404).send({ status: false, message: "Student not found" }) : res.status(200).send({ status: true, message: "List of requested student", data: students })
        }
        else {
            let students = await studentModel.find({ isDeleted: false })
            return students.length == 0 ?  res.status(404).send({ status: false, msg: "Student not found" }) : res.status(200).send({ status: true, message: "List of requested student", data: students })
        }
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

// ============================================================================


// ---------------------delete-------------------------------
const deletedBooks = async function (req, res) {
    try {
        let bookIdData = req.params.bookId;

        let book = await bookModel.findById(bookIdData);


        if (book.isDeleted === true) {
            return res.status(404).send({ status: false, message: "No book exists" });
        }
        let deletedBooks = await bookModel.findByIdAndUpdate({ _id: bookIdData },
            { isDeleted: true, deletedAt: new Date() }, { new: true });

        res.status(200).send({ status: true, message: "book has been deleted" })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
};


router.post("/register",userController.createUser)
