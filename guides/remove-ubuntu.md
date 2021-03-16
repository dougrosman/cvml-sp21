# Remove Ubuntu 20.04 from a dual-boot Windows 10 system
3/14/2021

### 0. Backup
Backup Windows and get data you want from Ubuntu

(Following this article: [How to Uninstall a Linux Dual-Boot System From Your Computer](https://www.howtogeek.com/141818/how-to-uninstall-a-linux-dual-boot-system-from-your-computer/))

1. Create Windows 10 Install media (10-15 minutes) ([Download here](https://www.microsfot.com/en-us/software-download/windows10))
   1. Download tool now
   2. Use External USB at least 8GB
   3. Create Install media for another device

### Delete Ubuntu from boot options (remove GRUB?)

* From this site: [https://www.tenforums.com/installation-upgrade/115716-uefi-remove-unwanted-boot-entries-bios-solved-easily.html](https://www.tenforums.com/installation-upgrade/115716-uefi-remove-unwanted-boot-entries-bios-solved-easily.html)
1. Go into command prompt (run as administrator)
2. type bcdedit /enum firmware (space between enum and firmware
3. To delete entries you don't want
type bcdedit /delete {identifier} where the identifier is shown in your list. Include curly braces { }.

Didn't remove it.

* Tried this (didnt remove it from the BIOS boot menu though): https://askubuntu.com/questions/921046/how-to-remove-ubuntu-from-boot-menu-after-deleting-ubuntu-partition-in-windows
* I've successfully executed this solution below to my problem:

    In BIOS, change Boot Sequence to allow booting from USB (containing Ubuntu)

    In GRUB, select Try Ubuntu without installing

    Once in Ubuntu, press Ctrl+Alt+T to bring up Terminal

    Type sudo efibootmgr to list all the entries in Boot Menu. If the command doesn't exist, then do sudo apt install efibootmgr.

    Find Ubuntu in the menu and note down its boot number e.g. 1 in Boot0001

    Type sudo efibootmgr -b `<boot number>` -B to delete the entry from Boot Menu. E.g. sudo efibootmgr -b 1 -B

-b: modify boot number -B: delete boot number

There after, all I did was to switch Windows Boot Manager back up to the top of the Boot Menu > go back to Windows 10 > Create and format hard disk partitions and extended my Windows C:\ Drive partition to merge with the free space where it came from my deleted Ubuntu drive.

* tried this: https://superuser.com/questions/1410681/completely-remove-ubuntu-from-windows-10-pc

Use easyUEFI


### Install Ubuntu

[How to Dual Boot Ubuntu 20.04 LTS and Windows 10 [ 2020 ]](https://www.youtube.com/watch?v=-iSAyiicyQY)