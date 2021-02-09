<style>
  img {
    margin-top: 1em;
    max-width: 700px;
  }

  img + em {
    display: inline-block;
    font-size: .9rem;
    font-weight: 600;
    margin-bottom: 2em;
  }

  h1, h2, h3, h4, h5, h6 {
    color: black;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  h2 {
    background: #ccf;
    padding: .5em;
  }

  h3 {
    background: #fcc;
    padding: .5em;
  }

  h4 {
    background: #cfc;
    padding: .25em;
  }

  h5 {
    background: #ffc;
    padding: .25em;
  }
</style>

# Week 02 - 02/09/21 - Image Processing and "Mirrors"

##### Agenda
1. Good morning!
2. Look at art, things happening in the world
3. Lecture: History of computer vision
4. Look at some "trad" computer vision art
5. Talk about project scope, what we are capable of. Thinking idea and affect first, technology second. Even if the technology is the content of your work.
6. Coding workshop part 1: setting up tools, varius p5.js sketches to introduce pixel manipulation basics
- Break
1. Good afternoon!
2. Coding workshop continued. Work on Rozin mirrors
3. Go over GitHub/fullscreen/responsive rozin mirrors
4. Homework: post your rozin mirror to your github

Exercise thoughts:
1. thinking pixel-to-X (light and subject as input, pixel manipulation as output)
2. Always thinking about input-ouput relationships. Computer vision tools are a means to an end. Computer vision can be a means towards translating the human/immaterial/unquantifiable into the digital/quantifiable/
3. How do we address "idea-first" thinking when optimization/technical limitations enter the process.

https://www.youtube.com/watch?v=7bXJ_obaiYQ
https://www.youtube.com/watch?v=g5cIVq-l12I

### CV
[Early Days of Computer Vision (60s)](https://www.youtube.com/watch?v=gaQi26FbK4k)

[Computer Vision vs Image Processing](https://www.youtube.com/watch?v=9-8Js62wzQs) [note: in general, "computer vision" is about understanding the world. Image processing a step in the pipeline towards understanding]

### Art
- [Surface Tension](https://www.lozano-hemmer.com/surface_tension.php) - Rafael Lozano-Hemmer (1992)
- [Standards and Double Standards](https://www.lozano-hemmer.com/standards_and_double_standards.php) - Rafael Lozano-Hemmer (2004)
- [A Parallel Image](https://www.youtube.com/watch?v=g5cIVq-l12I) - Gebhard Sengmüller (2008)
- [pointerpointer.com](https://pointerpointer.com/)
- [Drawing With Sound](https://annaridler.com/drawing-with-sound) - Anna Ridler (2017)****

#### Daniel Rozin (Mirrors)

##### Software Mirrors
* [Mirror No. 5 (2001)](https://vimeo.com/32462252)
* [Darwinian Straw Mirror](https://vimeo.com/129686860)


## Code
### p5.js sketches
1. Pixel access