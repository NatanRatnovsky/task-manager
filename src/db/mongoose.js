const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        },
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        require: true,
        minLength: 6,
        trim: true,
        validate(value) {
            if (value ==='password') {
                throw new Error('Password not be equal to \"password\"!')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        require: true,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    }
})

// const me = new User({
//     name: 'Natan',
//     email: 'nratnovsky@gmail.com',
//     password: ' 123456  ',
//     age: 29
// })
//
// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// });

const Task = mongoose.model('Task', {
    description: {
        type: String,
        require: true,
        trim: true
    },
        completed: {
            type: Boolean,
            default: false
        }

})

const learn = new Task({
    description: 'Learn Vue.JS'
})

learn.save().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
