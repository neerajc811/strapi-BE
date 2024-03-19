module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.gmail.com'),
          port: env('SMTP_PORT', 465),
          auth: {
            user: 'neerajc811@gmail.com',
            pass: 'eond ivej klnz afer',
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'neerajc811@gmail.com',
          
        },
      },
    },
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          limit: 52428800,
          
        },
      },
    },
    // ...
  });