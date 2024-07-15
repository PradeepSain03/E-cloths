const { body, validationResult } = require('express-validator');


exports.validate = [

  body('email').trim().isEmail().normalizeEmail().withMessage('Invalid email'),

  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  body('address').notEmpty().withMessage('Address is required').escape(),

  body('contact').optional().isMobilePhone('any').withMessage('Must be a valid phone number').isLength({ max: 10 }).withMessage('Contact number cannot be more than 10 digits'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];