import models from "../models";
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default {
    add: async (req, res, next) => {
        try {
            const checkEmail = await models.Usuario.findOne({ email: req.body.email })
            if (checkEmail.email) {
                res.status(404).send({
                    message: 'Email already registered'
                })
            } else {
                req.body.password = await bcrypt.hash(req.body.password, 10);
                const reg = await models.Usuario.create(req.body)
                res.status(200).json(reg)
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findOne({ _id: req.query._id });
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json(reg)
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    list: async (req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Usuario.find({ $or: [{ 'nombre': new RegExp(valor, 'i') }, { 'email': new RegExp(valor, 'i') }] }, { createdAt: 0 })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg)
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    update: async (req, res, next) => {
        try {
            let pas = req.body.password;
            const regPass = await models.Usuario.findOne({ _id: req.body._id });
            if (pas != regPass.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, {
                rol: req.body.rol, nombre: req.body.nombre, tipo_documento: req.body.tipo_documento,
                num_documento: req.body.num_documento, direccion: req.body.direccion,
                telefono: req.body.telefono, email: req.body.email, password: req.body.password
            });
            res.status(200).json(reg); if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message: 'Item updated' })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndDelete({ _id: req.query._id })
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message: "Item deleted" })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 })
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message_: 'Item activated' })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 })
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message_: 'Item deactivated' })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    login: async (req, res, next) => {
        try {
            let user = await models.Usuario.findOne({ email: req.body.email, estado: 1 });
            if (user) {
                let match = await bcrypt.compare(req.body.password, user.password);
                if (match) {
                    let tokenReturn = await token.encode(user._id);
                    res.status(200).json({ user, tokenReturn });
                } else {
                    res.status(404).send({
                        message: 'User or password incorrect'
                    });
                }
            } else {
                res.status(404).send({
                    message: "User doesn't exists"
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'An error occurred'
            });
            next(e);
        }
    }
}
