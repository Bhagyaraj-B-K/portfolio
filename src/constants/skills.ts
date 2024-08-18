export default {
  Backend: [
    {
      title: 'NestJS',
      image: 'https://nestjs.com/img/logo-small.svg'
    },
    {
      title: 'Node.js',
      image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
    },
    {
      title: 'Express.js',
      image: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'
    },
    {
      title: 'PHP (Aadya Framework)',
      image: 'https://www.php.net/images/logos/new-php-logo.svg'
    },
    {
      title: 'NJS2 (Node.js Framework)',
      image: 'https://www.njs2.com/assets/images/njs2-logo.png'
    }
  ],
  Dbms: [
    {
      title: 'MongoDB',
      image: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png'
    },
    {
      title: 'MySQL',
      image: 'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png'
    },
    {
      title: 'Redis',
      image: 'https://www.svgrepo.com/show/303460/redis-logo.svg'
    },
    {
      title: 'PostgreSQL',
      image: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg'
    }
  ],
  Devops: [
    {
      title: 'Docker',
      image: 'https://www.svgrepo.com/show/349342/docker.svg'
    },
    {
      title: 'Git',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      title: 'AWS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      title: 'Render Servers',
      image:
        'https://media.licdn.com/dms/image/v2/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/company-logo_200_200/0/1702595267620/renderco_logo?e=2147483647&v=beta&t=ZYrxKUyruOEupgw5Lr5amgwgBCJq8VXH8r05Qr5CeQc'
    },
    {
      title: 'Bitbucket',
      image: 'https://e7.pngegg.com/pngimages/828/497/png-clipart-computer-icons-github-bitbucket-software-repository-cosmic-blue-angle.png'
    },
  ],
  Frontend: [
    {
      title: 'ReactJs',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
    },
    {
      title: 'HTML5',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
    },
    {
      title: 'CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png'
    },
    {
      title: 'Bootstrap',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
    },
    {
      title: 'Javascript',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    }
  ]
} as SkillSet;

export type SkillSet = Record<string, Skill[]>;

export type Skill = {
  title: string;
  image: string;
};