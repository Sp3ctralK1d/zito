const router = require('express').Router()

router.get('/', (req, res) => {
    //Достаем список всех категорий
    //Достаем список подкатегорий с прикрепленными категории

    res.send("hello world")
    
})

router.get('/catalogue:category', (req, res) => {

})

module.exports = router