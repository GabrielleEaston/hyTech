const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Post = require('../models/post')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await new User({
            username,
            email,
            password_digest
        })

        await user.save()

        const payload = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log(
            'You made it to the signUp controller, but there was an error :('
        )
        return res.status(400).json({ error: error.message })
    }
}

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (await bcrypt.compare(password, user.password_digest)) {
            const payload = {
                id: user._id,
                username: user.username,
                email: user.email
            }

            const token = jwt.sign(payload, TOKEN_KEY)
            return res.status(201).json({ user, token })
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const verifyUser = (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const user = jwt.verify(token, TOKEN_KEY)
        res.json({ user })
    } catch (e) {
        res.status(401).send('Not Authorized')
    }
}

const changePassword = async (req, res) => { }

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if (post) {
            return res.json(post)
        }
        res.status(404).json({ message: 'Post not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createPost = async (req, res) => {
    try {
        const post = await new Post(req.body)
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndUpdate(id, req.body, { new: true }, (error, post) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!post) {
            return res.status(404).json({ message: 'Post not found!' })
        }
        res.status(200).json(post)
    })
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Post deleted")
        }
        throw new Error("Post not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    signUp,
    signIn,
    verifyUser,
    changePassword,
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}