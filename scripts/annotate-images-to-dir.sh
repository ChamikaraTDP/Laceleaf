#!/usr/bin/bash

set -e;

src="./new";
dest="./marked";

if test -d $dest; then
	echo "$dest folder exists"
else
	mkdir "$dest";
	echo "$dest folder created"
fi

for dir in "$src"/*;                           
do
	if test -d $dir; then
		foldername="${dir##*/}";

		echo "dir $foldername";
		destFolder="$dest/$foldername";

		if test -d $destFolder; then
			echo "$destFolder folder exists"
		else
			mkdir "$destFolder";
			echo "$destFolder folder created"
		fi

		num=1;

		for image in "$dir"/*.JPG;
		do 
			# fullname="${image##*/}";
			# filename="${fullname%.*}";

			destFileName="$destFolder/anthurium-$foldername-$num.JPG";

			convert "$image" -resize 1920x1280 miff:- | composite -dissolve 50 -gravity southeast -geometry +20+20  watermark-small.png - "$destFileName";

			echo "img created as $destFileName";

			(( num += 1 ))
		done
	fi
done
