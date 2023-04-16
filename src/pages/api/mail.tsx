const mail = async (req: any, res: any) => {
	const { fullName, email, note } = req.body;
	let nodemailer = require('nodemailer');
  
	try {
	  const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		secure: true,
		port: process.env.MAIL_PORT,
		auth: {
		  user: process.env.MAIL_USER,
		  pass: process.env.MAIL_PASS,
		},
	  });
	  await transport.sendMail({
		from: `${process.env.MAIL_USER}`,
		to: `${process.env.MAIL_USER}`,
		subject: 'Client Message',
		html: `<div> 
			<p> <b>From: </b> OPTIPOS </p>
			<p> <b>Full Name: </b> ${fullName} </p>
			<p> <b>Email: </b> ${email} </p>
			<p> <b>Note: </b> ${note} </p>
			</div>`,
	  });
	  res.status(201).json(req.body);
	} catch (err) {
	  res.status(400).json({ message: 'something bad happen' });
	}
  };
  
  export default mail;
  