export default function handler(req, res) {
  const ua = req.headers['user-agent'].toLowerCase();

  if (ua.includes('android')) {
    res.writeHead(302, {
      Location: 'https://play.google.com/store/apps/details?id=com.nynii.app',
    });
  } else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
    res.writeHead(302, {
      Location: 'https://apps.apple.com/in/app/nynii/id6746144979',
    });
  } else {
    res.writeHead(302, { Location: 'https://nynii.com' });
  }

  res.end();
}

