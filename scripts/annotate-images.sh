#!/usr/bin/bash

set -e;

for dir in ./public/images/shop/*;                           
do
	for image in "$dir"/*.JPG;
	do 
    fullname="${image##*/}";
		filename="${fullname%.*}";

		convert "$image" -resize 1920x1280 miff:- | composite -dissolve 50 -gravity southeast -geometry +20+20  watermark.png - "$dir"/"$filename"_marked.JPG;
	done
done
