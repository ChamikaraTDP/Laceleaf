#!/usr/bin/bash

set -e;
shopt -s nullglob;

for dir in ./public/images/shop/*;                           
do
	for image in "$dir"/*.JPG;
	do
		if [[ $image != *_marked.JPG ]]; then
			rm "$image";
			echo "file $image removed";	
		else
			echo "file $image kept";	
		fi
	done
done
