function Image(image)
{
	this.image = image;
	this.bitmap = new createjs.Bitmap(this.image);
	if (this.bitmap == null)
	    throw new Error("Erreur dans la cr�ation de l'image");
}