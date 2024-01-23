#!/bin/bash

# Full path to ffmpeg.exe
ffmpeg_path="/c/Dev/PersonalProjects/elise-website/utils/ffmpeg/bin/ffmpeg.exe"

# Set the input and output folder paths
input_folder="/c/Dev/PersonalProjects/elise-website/src/images"
output_folder="/c/Dev/PersonalProjects/elise-website/src/images/lowres"

# Create the output folder if it doesn't exist
mkdir -p "$output_folder"

# Loop through each image in the input folder
for input_image in "$input_folder"/*.{jpg,png,gif}; do
    # Extract the filename without extension
    filename=$(basename -- "$input_image")
    filename_no_ext="${filename%.*}"

    # Check if there are any matching files
    if [ -e "$input_image" ] && [[ "$filename_no_ext" != *"lowres"* ]]; then
        # Build the output image path
        output_image="$output_folder/lowres_${filename}"

        # Run the ffmpeg command
        "$ffmpeg_path" -y -i "$input_image" -vf "scale=20:-1,boxblur=0" "$output_image"

        echo "Processed: $filename"
    fi
done

echo "Conversion complete!"
