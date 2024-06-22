let users = [
    {id: 1, Name: 'Smite Jonas'},
    {id: 2, Name: 'Angelina Jolie'},
    {id: 3, Name: 'Jackie Chan'},
    {id: 4, Name: 'Julia Roberts'},
    {id: 5, Name: 'James Cameron'},
];

// @desc GET ALL POSTS
// @Routes GET /api/users
export const getUsers = (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit) {
        return res.status(200).json(users.slice(0, limit));
    } 
        res.status(200).json(users);
};

// @desc  GET SINGLE POST
// @Routes GET /api/users/:id
export const getUser = (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        const error = new Error(`A user with the id of ${id} was not found`);
        error.status = 404;
        return next(error);

        //return res
        //.status(404)
        //.json({ msg: `A user with the id ${id} was not found` });
    }

    res.status(200).json(user);
};

// @desc  CREATE POST
// @Routes POST /api/users
export const createUser = (req, res, next) => {
    const newUser = {
     id: users.length + 1,
     title: req.body.title
    };
 
    if (!newUser.title) {
         const error = new Error(`Please include a title`);
         error.status = 400;
         return next(error);
    }
 
    users.push(newUser);
    res.status(201).json(users); 
};

// @desc  UPDATE POST
// @Routes  PUT /api/users
export const updateUser = (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        const error = new Error(`A user with the id of ${id} was not found`);
        error.status = 404;
        return next(error);

    }

    user.title = req.user.title;
    res.status(200).json(users);
};

// @desc  DELETE POST
// @Routes  DELETE /api/users
export const deleteUser = (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        const error = new Error(`A user with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    users = user.filter((user) => user.id !== id);
    res.status(200).json(users);
};
