# FFMPEG Guide

## **Videos**

### Extracting images from a video file (and resizing/cropping them to 1024x1024).
After following this tutorial, your images will be ready to be zipped and used to train a StyleGAN2 model.
<iframe width="560" height="315" src="https://www.youtube.com/embed/fESqT02VxIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<hr>

### Installing FFMPEG
<iframe width="560" height="315" src="https://www.youtube.com/embed/BRoZiY6E5h4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<hr>

## Using FFMPEG
1. Open Terminal in Mac, or Command Prompt in Windows
2. ```cd``` into the directory with your input media
3. run the desired FFMPEG command

## Common FFMPEG commands
Note: The following commands can be modified to suit your needs. I'll put some common "flags" here that you'll see being used below:
1. `-r`: the framerate (e.g.: `-r 30` for 30fps)
2. `-i`: the input file(s). Just something you always need.
3. `-crf`: the "quality" when exporting to .mp4. Higher number = lower quality (more compression, smaller file sizes). Stick between 17-25.

Note: If you're extracting images from a video, you can save them as PNG or JPG.

4. Turn an image sequence into an .mp4 (60 fps, scale is the same as input images)

   ```ffmpeg -r 60 -i %d.jpg -vcodec libx264 -crf 23 -pix_fmt yuv420p output.mp4```

5. Extract every frame from a video
   
   ```ffmpeg -i input.mp4 -vf frames/output%d.jpg```

6. Extract a certain number of frames from a video by setting fps

    ```ffmpeg -i input.mp4 -vf fps=1 frames/output%d.jpg```

1. Extract frames from video, also apply resize, crop, and fps.
   `ffmpeg -i input.mp4 -q:v 2 -vf scale=-1:1024,fps=1,"crop=1024:1024" frames/output%5d.jpg`

1. Same as above, but with a start offset so nothing from the first 30 seconds of video is captured:
   `ffmpeg -i input.mp4 -ss 30 -q:v 2 -vf scale=-1:1024,fps=1,"crop=1024:1024" frames/output%5d.jpg`


More Information:

[Cutting small sections](https://trac.ffmpeg.org/wiki/Seeking#Cuttingsmallsections)
[FFMPEG Upscaling Tutorial](https://ottverse.com/change-resolution-resize-scale-video-using-ffmpeg/)
