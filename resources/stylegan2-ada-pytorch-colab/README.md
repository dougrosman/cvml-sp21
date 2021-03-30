# Tutorial: StyleGAN2-ADA-PyTorch in Google Colab

This repo and Colab Notebook can be found here: [https://github.com/dougrosman/stylegan2-ada-pytorch](https://github.com/dougrosman/stylegan2-ada-pytorch)

## **0. Starting over (if you have this repo in your Google Drive already and want a fresh start)**
If you already have a version of the repo and Colab Notebook in your Google Drive, but want to start over,
1. Back up any .pkl files and images from the 'results' folder (i.e., save them somewhere else in your Google Drive temporarily)
2. Back up any datasets (.zip folders) from the 'datasets' folder you want to keep (i.e., save them somewhere else in your Google Drive temporarily)
3. Back up any generated images/videos
4. After backing up anything you want to keep, remove the **colab-sg2-ada-pytorch** folder from your Google Drive
5. Remove the **SG2-ADA-PyTorch.ipynb** notebook from the 'Colab Notebooks' folder in your Google Drive
   
## **1. Setting up the Colab Notebook**
1. Open the Google Colab Notebook for this repo
2. Click **Copy to Drive** (towards the top of the page)
3. Rename the notebook from *Copy of SG2-ADA-PyTorch.ipynb* to **SG2-ADA-PyTorch.ipynb**
4. Run the cell under 'Setup' to mount your Google Drive inside the notebook
5. Run the cell under 'Install Repo' to install the repo to your Google Drive. The first time you run this, the repo will be cloned. After that, this cell will just move you into the correct directory, and not install additional copies of the repo.

## **2. Data Processing**
Before training your model, the images in your data set should all be square, and either 1024 x 1024, 512 x 512, or 256 x 256. **The default resolution for this notebook is 1024x1024**. Depending on the needs of your project, there are multiple approaches to preparing your data set. If you just need to automate batch cropping and resizing your images, you can do that directly in the Colab.

### Batch cropping/resizing your images inside Google Colab (quickest method)
1. On your local computer, make sure all of your images in your data set are either .jpg, .png, or .gif.
2. Make sure all your images are in a single folder (remove any subfolders)
3. Compress your folder full of images into a .zip folder
   #### **Windows:**
   Right-click your folder, and select 'send to', then 'Compressed folder'

   #### **Mac:**
   Zipping folders the traditional way on a Mac creates unwanted hidden folders in your .zip that will prevent training. You need to download a tool called Keka to help with this (don't worry, this is quick and simple)
   1. Download and install [Keka](https://www.keka.io/en/)
   2. Open Keka
   3. Check the box next to 'Exclude Mac resource forks'
   4. Select ZIP in the top-right corner of the window.
   5. Drag and drop your data set folder directly onto the open Keka app.
   6. Compress your folder.
4. Upload your .zip folder to the 'datasets' folder inside the stylegan2-ada-pytorch folder in your Google Drive.

## **3. Training**
## **4. Generating images (coming soon)**