"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT ?? '3000';
const portNumber = Number(port) || 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(process.cwd(), 'views'));
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
const team = [
    { name: 'Ayesha', role: 'Designer', bio: 'Creates engaging layouts and visual experiences.' },
    { name: 'Ravi', role: 'Developer', bio: 'Builds the backend, APIs, and dynamic website features.' },
    { name: 'Nina', role: 'Marketing', bio: 'Turns ideas into messages that reach customers.' }
];
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        headline: 'Build your dynamic website',
        description: 'A ready-to-run website with a form, dynamic pages, and a JSON API.',
        team
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        headline: 'About this site',
        description: 'Learn how this website works and how to customize it.'
    });
});
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        headline: 'Contact us',
        description: 'Send a message and get a quick response from our team.'
    });
});
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).render('result', {
            title: 'Contact Error',
            success: false,
            message: 'Please fill in all fields before sending your message.'
        });
    }
    res.render('result', {
        title: 'Message Sent',
        success: true,
        message: `Thanks, ${name}! We received your message and will reply soon.`
    });
});
app.get('/api/team', (req, res) => {
    res.json({ team });
});
app.use((req, res) => {
    res.status(404).render('result', {
        title: 'Page not found',
        success: false,
        message: 'Sorry, this page does not exist. Please check the URL or return home.'
    });
});
app.listen(portNumber, () => {
    console.log(`Server is running on http://localhost:${portNumber}`);
});
