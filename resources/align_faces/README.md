<style>
code {
  color: #0e0;
  background: #111 !important;
  padding: .25em;
}

</style>

# Align faces
##### Face alignment is useful for:
1. Training a StyleGAN2 faces model to achieve realism
2. Projecting an image of a face into the FFHQ latent space
3. Training a pix2pix model (facial landmarks --> faces)

<hr>

## **PART 0: HOW TO USE THIS GUIDE**
1. Read every single line from top to bottom (don't skim).
2. The steps in this document should be followed in this order.
3. If you've already set up your Anaconda environment, skip to Part II
4. Any line with a '$' means this is a command you should run in your Terminal. Do not include the $ when you copy and paste.

## **PART I: SETUP**

### **Mac Setup**
#### 1. Download/Install Anaconda
*Anaconda is a tool that allows you to create Python virtual environments. Virtual environments allow you to install different versions of Python and Python packages on your computer to use for individual projects, without these different versions conflicting with each other.*
1. Download [Anaconda](https://www.anaconda.com/products/individual)
   1. Click 'Download'
   2. Choose **64-Bit Graphical Installer** under MacOS
   3. *If you already have an old version of Anaconda on your computer, **update Anaconda**. Otherwise, move to the next step.*
      1. Open your Terminal
      2. Type $ `conda update conda` and press **return**
      3. If this fails, try [uninstalling Anaconda](https://docs.anaconda.com/anaconda/install/uninstall/) and then installing it from scratch.
2. Install Anaconda
   1. All the default install settings are fine, so keep hitting 'continue' until the installation finishes.
   2. **This may take some time. If it appears your installation is stuck at '_Running Package Scripts_', just wait a few minutes. If the install doesn't complete after 10 minutes, take a screenshot of your installer, or any errors you might have, and send it to Doug.**

#### 2. Download the face alignment scripts
*These scripts are included in the [cvml-dataset-tools](https://github.com/dougrosman/cvml-dataset-tools) repo. We will clone the entire repo.*

1. Open a new Terminal window (if one isn't already open)
2. Clone the [cvml-dataset-tools](https://github.com/dougrosman/cvml-dataset-tools) repo to your computer
   1. $ `cd` into your desired directory (e.g. GitHub_Repos)
   2. $ `git clone https://github.com/dougrosman/cvml-dataset-tools.git`
   3. $ `cd cvml-dataset-tools/align_faces`
3. Inside the *align_faces* folder create two empty folders:
   1. $ `mkdir raw_images`
   2. $ `mkdir aligned_images`


#### 3. Create Anaconda virtual environment for face alignment
1. Open a new Terminal window (you should see (base) at the front of your command prompt. If you wish to leave the (base) configuration (**which you should NOT do for this tutorial**), type $ `conda deactivate`. The (base) config will return if you close and re-open your Terminal).
2. Create your Conda virtual environment by executing the following commands (press 'return' after each of these)
   1. $ `conda create --name alignfaces python=3.7`
   2. press `y` then 'return' on your keyboard after it prompts you to proceed
   3. $ `conda activate alignfaces`
3. Install the required Python packages into your alignfaces virtual environment (press 'return' and then enter `y` when prompted to proceed for each of these)
   1. $ `conda install numpy`
   2. $ `conda install -c anaconda scipy`
   3. $ `conda install -c anaconda pillow`
   4. $ `conda install -c conda-forge dlib`

### **Windows Setup**
#### 1. Download/Install Anaconda
*Anaconda is a tool that allows you to create Python virtual environments. Virtual environments allow you to install different versions of Python and Python packages on your computer to use for individual projects, without these different versions conflicting with each other.*
1. Download [Anaconda](https://www.anaconda.com/products/individual)
   1. Click 'Download'
   2. Choose **64-Bit Graphical Installer** under Windows 10
2. Install Anaconda
   1. All the default install settings are fine, so keep hitting 'continue' until the installation finishes.
   2. **This may take some time. If it appears your installation is stuck at '_Running Package Scripts_', just wait a few minutes. If the install doesn't complete after 10 minutes, take a screenshot of your installer, or any errors you might have, and send it to Doug.**

#### 2. Download the face alignment scripts
*These scripts are included in the [cvml-dataset-tools](https://github.com/dougrosman/cvml-dataset-tools) repo. We will clone the entire repo.*

1. Open a new Git Bash terminal (if one isn't already open)
2. Clone the [cvml-dataset-tools](https://github.com/dougrosman/cvml-dataset-tools) repo to your computer
   1. $ `cd` into your desired directory (e.g. GitHub_Repos)
   2. $ `git clone https://github.com/dougrosman/cvml-dataset-tools.git`
   3. $ `cd cvml-dataset-tools/align_faces`
3. Inside the *align_faces* folder create two empty folders:
   1. $ `mkdir raw_images`
   2. $ `mkdir aligned_images`


#### 3. Create Anaconda virtual environment for face alignment
1. Open a new Anaconda Prompt (search Anaconda in your Windows search). You should see (base) at the front of your command prompt. If you wish to leave the (base) configuration (**which you should NOT do for this tutorial**), type $ `conda deactivate`. The (base) config will return if you close and re-open your Terminal).
2. Create your Conda virtual environment by executing the following commands (press 'return' after each of these)
   1. $ `conda create --name alignfaces python=3.7`
   2. press `y` then 'return' on your keyboard after it prompts you to proceed
   3. $ `conda activate alignfaces`
3. Install the required Python packages into your alignfaces virtual environment (press 'return' and then enter `y` when prompted to proceed for each of these)
   1. $ `conda install numpy`
   2. $ `conda install -c anaconda scipy`
   3. $ `conda install -c anaconda pillow`
   4. $ `conda install -c conda-forge dlib`


<hr>

## **PART II: PREPARING YOUR IMAGES**

*If you are continuing from the steps above*, Jump to step 1.

*If you are starting a new session...*
  1. Open a Terminal window
  2. $ `cd` into the *cvml-dataset-tools/align-faces* directory
  3. $ `conda activate alignfaces`

There are issues with some images not being read by the script. To make sure your images are the proper format, use the clean_images.py script in the *clean_images* folder.

1. $ `cd` into the clean_images folder
2. create a folder called *input* and a folder called *output*
   1. $ `mkdir input`
   2. $ `mkdir output`
3. Place any images you want to "clean" into the *input* folder
4. Clean your images
   1. **If many of your images are large (>2000px in any dimension), this will significantly slow down the alignment process. It is recommended that you downscale your images**
      1. $ `python clean_images_downscale.py`
   2. If your images don't need to be downscaled, run the regular script:
      1. $ `python clean_images.py`
5. Your images will end up in the *output* folder

## **PART III: ALIGNING YOUR FACES**

This script takes a while to run, depending on how large your images are, how many images you have, and how powerful your CPU is. **Be sure to close any other CPU-intensive applications before running this script on a large number of images.** 

1. $ `cd` into the *align_faces* folder
2. Make sure you conda environment is set to (alignfaces)
   1. If it isn't, run: $ `conda activate alignfaces`
3. Place your cleaned images into the *raw_images* folder
4. Run the script
   1. $ `python align_faces.py ./raw_images ./aligned_images`
5. You can monitor the *aligned_images* folder as your aligned faces are exported by the script.

Your images are ready!