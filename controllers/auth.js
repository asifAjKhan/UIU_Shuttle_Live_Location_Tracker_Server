import Student from '../models/student.models.js'
import Driver from '../models/driver.models.js'
import bcrypt, { compareSync } from "bcrypt";

export const register = async (req, res) => {
    const {role, name, email , password} = req.body;

    try{

        if(role == "student"){

              // Check if email is already registered
            const existingUser = await Student.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Student already registered' });
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt)

            const student = new Student({
                name : name,
                email : email,
                password : hash
            })

            await student.save();
            return  res.status(200).send("student has been created. ")

        }else{

            // Check if email is already registered
            const existingUser = await Driver.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Driver already registered' });
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt)

            const driver = new Driver({
                ...req.body,
                password : hash
            })

            await driver.save();
            return res.status(200).send("driver has been created. ")

        }

       

    }catch (err){
        console.log(err)
    }
};


export const login = async (req, res) => {

    const {role} = req.body
    console.log(role)

    try{

        if(role == "student"){

            
            const user = await Student.findOne({email : req.body.email})

            if(!user) return res.status(404).json({"msg" : " User not found"})

        
            const isPasswordCorrect = await bcrypt.compare(
                req.body.password,
                user.password
            )

            if(!isPasswordCorrect){
                return res.json({msg : "Wrong username or password"})
            }

            const {password, ...others} = user._doc;

           // console.log(user._doc)

           console.log(others)

            return res.status(200).json({msg : " Student Log in successfully", others})

        }else {
            if(role == "driver"){
    
                const driver = await Driver.findOne({email : req.body.email})
    
                if(!driver) return res.status(404).json({"msg" : " User not found"})
    
                const isPasswordCorrect = await bcrypt.compare(
                    req.body.password,
                    driver.password
                )
    
                if(!isPasswordCorrect){
                 return res.json({msg : "Wrong username or password"})
                }

                const {password, ...others} = driver._doc;

              //  console.log(driver._doc)

              console.log(others)
    
                return res.status(200).json({msg : " Driver  Log in successfully", others})
               
            } 
        }

    }catch(err){
        return res.status(500).json(err)
    }

}



