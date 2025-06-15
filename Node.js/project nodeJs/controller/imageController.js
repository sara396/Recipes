const imageController = {
    upload: (req, res) => {
        if (!req.file) {
            return res.status(400).json('No image uploaded')
        }
        const imageUrl = `${req.file.filename}`
        res.status(200).json({ message: 'Image uploaded successfully', imageUrl });

    }
}
export default imageController