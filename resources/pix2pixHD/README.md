# Pix2pixHD

## Start Here
Doug's [forked pix2pixHD repo](https://github.com/dougrosman/pix2pixHD) has the link to the Colab Notebook at the top of the README.

## FFMPEG Commands


`ffmpeg -r 30 -pattern_type glob -i "*_input_label.png" -vcodec libx264 -preset slow -crf 20 -pix_fmt yuv420p input_sequence.mp4`


`ffmpeg -r 30 -pattern_type glob -i "*_synthesized_image.png" -vcodec libx264 -preset slow -crf 20 -pix_fmt yuv420p synthesized_sequence.mp4`