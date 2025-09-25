export default function handler(req, res) {
  const { secret, path = '/' } = req.query;

  if (!process.env.BUILDER_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Missing BUILDER_PREVIEW_SECRET' });
  }

  if (secret !== process.env.BUILDER_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  res.setPreviewData({ builder: true });
  res.writeHead(307, { Location: path });
  res.end();
}
