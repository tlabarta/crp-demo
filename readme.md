# Y-XAI — Concept-Based Explainability Showcase

<div align="center">
  <img src="img/crp_logo.png" width="220"/>
  <p>A visual demonstration of concept-based explainability using <a href="https://doi.org/10.1038/s42256-023-00711-8">Concept Relevance Propagation (CRP)</a></p>
</div>

---

# Introduction

![concepts.png](img/concepts.png)

**Y-XAI** is an interactive, presentation-ready demonstration designed to communicate how image-classification models make decisions and how concept-based explainability can expose the internal reasoning process of modern neural networks.

This repository hosts the **static front-end** used for showcasing *Concept Relevance Propagation* on **GitHub Pages**.  

If you are interested in our **latest large-scale explanation system**, visit  
👉 **https://semanticlens.hhi-research-insights.eu/**

---

# About [CRP (Concept Relevance Propagation)](https://doi.org/10.1038/s42256-023-00711-8)

Traditional heatmaps show *where* a neural network focuses.  
[**CRP**](https://doi.org/10.1038/s42256-023-00711-8) reveals *what* the model is actually looking for.

Neural networks learn **latent concepts**, structures such as textures, shapes, or semantic components. CRP isolates these internal concepts and shows how much each one contributes to a decision.

In short:

- Neural networks internally represent human-interpretable concepts  
- CRP disentangles these concept-level signals  
- Users can inspect *why* a prediction was made, not just *where* the network looked  
- This enables detecting correct reasoning, errors, and hidden biases

This demo translates the CRP method into a clear, visual guided experience, suitable for outreach, education, and public presentations.

---

# Demo Scenarios

Below are the four scenarios included in the demo, rewritten from the official presenter notes.

## 1. “This is a flamingo!”  
*How the model correctly recognizes a flamingo.*

This introduction scenario shows how CRP visualises the concepts that a model uses in a correct classification.  
People often describe flamingos using features such as *long legs* or *pink feathers*.  
CRP reveals whether the model relies on similar meaningful cues.  
Heatmaps highlight where features were detected, while concept views show *what* was recognized (e.g., leg shape, feather texture).

>**Key insight:**  
Models can learn human-understandable concepts, and CRP shows which concepts were used for prediction.

---

## 2. “Is this a llama or ibex?”  
*A misclassification explained.*

In this case, the model incorrectly classifies a llama as an ibex.  
The scenario highlights how explainability helps diagnose failure:

- The shape of the ears  
- Stones or mountains in the background  

These concepts strongly influenced the model’s incorrect decision.  
Interestingly, removing the ears or background stones leads to a correct classification.

>**Key insight:**  
CRP is crucial for understanding *why* models make mistakes and how they might be improved.

---

## 3. “Carton with or without cat?”  
*A correct prediction for the wrong reasons.*

The model correctly identifies a carton, but CRP reveals that its second-most important concept was a **cat face**.  
The explanation exposes a common dataset bias: many cartons in the training data contained cats.

>**Key insight:**  
Models can make correct predictions for fundamentally wrong reasons.  
Explainability is necessary to detect hidden correlations in training data.

---

## 4. “Band-aid or healthy skin?”  
*Bias in a medical model with real-world risk.*

This scenario parallels the previous one but in a more critical context: skin cancer detection.

The model predicts “non-cancerous,” which is correct—but CRP shows it relied primarily on the presence of a **band-aid**.  
During training, dermatologists often used band-aids to cover unwanted areas in healthy cases.  
Thus, the model learned a dangerous shortcut: *band-aid = healthy*.

>**Key insight:**  
Explainability is essential for safety-critical systems.  
Detecting such hidden biases can prevent severe misclassifications and guide dataset improvements.

---

# Citation
If you reference CRP in academic or professional contexts, please cite:
```bibtex
@article{achtibat2023attribution,
  title={From attribution maps to human-understandable explanations through Concept Relevance Propagation},
  author={Achtibat, Reduan and Dreyer, Maximilian and Eisenbraun, Ilona and Bosse, Sebastian and Wiegand, Thomas and Samek, Wojciech and Lapuschkin, Sebastian},
  journal={Nature Machine Intelligence},
  volume={5},
  number={9},
  pages={1006–1019},
  year={2023},
  doi={10.1038/s42256-023-00711-8}
}
```
---

# License
This project is released under the BSD 3-Clause Clear License.
Please see the LICENSE file in this repository for full terms.