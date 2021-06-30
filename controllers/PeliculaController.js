import models from "../models";

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Pelicula.create(req.body)
            res.status(200).json(reg)
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    query: async (req, res, next) => {
        try {
            const reg=await models.Pelicula.findOne({_id:req.query._id})
            .populate('genre',{nombre:1});
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
            let valor = req.query.valor
            const reg=await models.Pelicula.find({$or:[{'nombre':new RegExp(valor,'i')},{'descripcion':new RegExp(valor,'i')}]},{createdAt:0})
            .populate('genre',{nombre:1})
            .sort({'createdAt':-1});
            res.status(200).json(reg)
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    update: async (req, res, next) => {
        try {
            const reg = await models.Pelicula.findByIdAndUpdate({_id:req.body._id},{genero:req.body.genero,codigo:req.body.codigo,
                                                                    nombre:req.body.nombre,descripcion:req.body.descripcion,
                                                                    precio_venta:req.body.precio_venta,stock:req.body.stock});
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message: 'Movie updated' })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Pelicula.findByIdAndDelete({ _id: req.query._id })
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message: "Movie deleted" })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Pelicula.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 })
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message_: 'Movie activated' })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Pelicula.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 })
            if (!reg) {
                res.status(404).send({
                    message: "Document not found"
                })
            } else {
                res.status(200).json({ message_: 'Movie deactivated' })
            }
        } catch (ex) {
            res.status(500).send({ message: 'An error occurred' })
            next(ex)
        }
    }
}