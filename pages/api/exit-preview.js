export default function handler(req, res) {
  const { path = '/' } = req.query;
  res.clearPreviewData();
  res.writeHead(307, { Location: path });
  res.end();
}
