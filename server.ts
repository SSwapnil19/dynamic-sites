import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT ?? '3000';
const portNumber = Number(port) || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const team: TeamMember[] = [
  { name: 'Ayesha', role: 'Designer', bio: 'Creates engaging layouts and visual experiences.' },
  { name: 'Ravi', role: 'Developer', bio: 'Builds the backend, APIs, and dynamic website features.' },
  { name: 'Nina', role: 'Marketing', bio: 'Turns ideas into messages that reach customers.' }
];

app.get('/', (req: Request, res: Response) => {
  res.render('index', {
    title: 'Home',
    headline: 'Build your dynamic website',
    description: 'A ready-to-run website with a form, dynamic pages, and a JSON API.',
    team
  });
});

app.get('/about', (req: Request, res: Response) => {
  res.render('about', {
    title: 'About',
    headline: 'About this site',
    description: 'Learn how this website works and how to customize it.'
  });
});

app.get('/contact', (req: Request, res: Response) => {
  res.render('contact', {
    title: 'Contact',
    headline: 'Contact us',
    description: 'Send a message and get a quick response from our team.'
  });
});

interface ContactFormBody {
  name?: string;
  email?: string;
  message?: string;
}

app.post('/contact', (req: Request<{}, {}, ContactFormBody>, res: Response) => {
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

app.get('/api/team', (req: Request, res: Response) => {
  res.json({ team });
});

app.use((req: Request, res: Response) => {
  res.status(404).render('result', {
    title: 'Page not found',
    success: false,
    message: 'Sorry, this page does not exist. Please check the URL or return home.'
  });
});

app.listen(portNumber, () => {
  console.log(`Server is running on http://localhost:${portNumber}`);
});
