export default function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();

  const isAndroid = /android/.test(ua);
  const isIOS = /iphone|ipad|ipod/.test(ua);

  const androidUrl = 'https://play.google.com/store/apps/details?id=com.nynii.app';
  const iosUrl = 'https://apps.apple.com/in/app/nynii/id6746144979';
  const fallbackUrl = 'https://nynii.com';

  if (isAndroid) {
    res.redirect(302, androidUrl);
  } else if (isIOS) {
    res.redirect(302, iosUrl);
  } else {
    res.redirect(302, fallbackUrl);
  }
}
