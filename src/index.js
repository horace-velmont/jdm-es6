import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import JandiMemberProvider from './jandiMebmerProvider';

const PORT = 3000;
const app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({
    exposedHeaders: "*"
}));

app.use('/jandi-member-list', (req, res) => res.send(new JandiMemberProvider().provideMember()));

app.use(bodyParser.json({
    limit: '50mb'
}));
app.set('root', __dirname);

app.server.listen(process.env.PORT || PORT, () => {
    console.log(`App is running on port ${app.server.address().port}`);
});

export default app;
