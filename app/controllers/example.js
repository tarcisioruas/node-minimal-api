module.exports = () => {
    
    const controller = {};

    controller.list = (req, resp) => {
        resp.json([
                {"id": 1, "name": "First name"}
            ]
        );
    }

    return controller;
}