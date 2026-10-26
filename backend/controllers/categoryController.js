const Category = require("../models/Category");


// Add Category

const addCategory = async(req,res)=>{

    try{

        const category = new Category({

            name:req.body.name

        });


        await category.save();


        res.status(201).json({

            message:"Category added successfully",
            category

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



// Get Categories

const getCategories = async(req,res)=>{

    try{

        const categories = await Category.find();

        res.json(categories);

    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



// Delete Category

const deleteCategory = async(req,res)=>{

    try{

        await Category.findByIdAndDelete(req.params.id);


        res.json({

            message:"Category deleted"

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};
const updateCategory = async(req,res)=>{

    try{

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name:req.body.name
            },
            {
                new:true
            }
        );


        res.json({
            message:"Category updated successfully",
            category
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports={

    addCategory,
    getCategories,
    deleteCategory,
    updateCategory
};