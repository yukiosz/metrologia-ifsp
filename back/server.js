const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rafael.shiraishi@ifsp.edu.br",
      pass: "dzsm hful begd wtas",
    },
  });

  const mailOptions = {
    from: email,
    to: "rafael.shiraishi@ifsp.edu.br",
    subject: `Contato pelo site de Metrologia IFSP`,
    html: `
    <h3><strong>Mensagem de Contato</strong></h3>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Telefone:</strong> ${phone}</p>
    <p><strong>Mensagem:</strong><br/>${message}</p>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("E-mail enviado com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao enviar e-mail.");
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
