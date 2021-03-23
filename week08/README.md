
# Week 08: StyleGAN2 training in RunwayML and Google Colab

1. Discuss Essays
2. Discuss Data Sets
   1. Collecting
   2. Prepping

https://www.redbull.com/us-en/cartoons/notimetolag

## Discuss Readings:

### Trevor Paglen: Invisible Images (Your Pictures Are Looking at You)
[Read essay](https://thenewinquiry.com/invisible-images-your-pictures-are-looking-at-you/)

> Human visual culture has become a special case of vision, an exception to the rule. The overwhelming majority of images are now made by machines for other machines, **with humans rarely in the loop**. 

> Images **have begun to intervene** in everyday life, their functions changing from representation and mediation, to activations, operations, and enforcement.

*How have images already intervened? What does Paglen mean by "intervene" in this context?*

### The Building Blocks of Interpretability
> when neurons appear to correspond to human ideas, it is tempting to reduce them to words. Doing so, however, is a lossy operation — even for familiar abstractions, the network may have learned a deeper nuance. For instance, GoogLeNet has multiple floppy ear detectors that appear to detect slightly different levels of droopiness, length, and surrounding context to the ears. There also may exist abstractions which are visually familiar, yet that we lack good natural language descriptions for: for example, take the particular column of shimmering light where sun hits rippling water. Moreover, the network may learn new abstractions that appear alien to us — here, natural language would fail us entirely!

> This type of layer-to-layer attribution is a prime example of how carefully considering interface design drives the generalization of our existing abstractions for interpretability.

> Attribution to spatial locations and channels can reveal powerful things about a model, especially when we combine them together. Unfortunately, this family of approaches is burdened by two significant problems. On the one hand, it is very easy to end up with an overwhelming amount of information: it would take hours of human auditing to understand the long-tail of channels that slightly impact the output. On the other hand, both the aggregations we have explored are extremely lossy and can miss important parts of the story. And, while we could avoid lossy aggregation by working with individual neurons, and not aggregating at all, this explodes the first problem combinatorially.

> If we want to make useful interfaces into neural networks, it isn’t enough to make things meaningful. We need to make them human scale, rather than overwhelming dumps of information.

> Composing these pieces is not an arbitrary process, but rather follows a structure based on the goals of the interface. For example, should the interface emphasize what the network recognizes, prioritize how its understanding develops, or focus on making things human-scale. To evaluate such goals, and understand the tradeoffs, we need to be able to systematically consider possible alternatives. 

> Beyond interfaces for analyzing model behavior, if we add model parameters as a substrate, the design space now allows us to consider interfaces for taking action on neural networks.

*This points to the ability to manipulate specific traits of an image (like Photoshop's neural filters that allow for "happiness" or head direction to be isolated and tweaked. But as we saw with the disappearing earring, the activations for these areas can't be totally isolated, and are very bound up in each other)*

> Human feedback on the model’s decision making process, facilitated by interpretability interfaces, could be a powerful solution to these problems. It might allow us to train models not just to make the right decisions, but to make them for the right reasons. (There is however a danger here: we are optimizing our model to look the way we want in our interface — if we aren’t careful, this may lead to the model fooling us!

## Bias in Data

https://twitter.com/WIRED/status/1325433641804070913

https://aiartists.org/ai-ethics
https://www.vice.com/en/article/88apnv/underpaid-workers-are-being-forced-to-train-biased-ai-on-mechanical-turk
https://anatomyof.ai/img/ai-anatomy-map.pdf


Lia Coleman https://www.liacoleman.com/