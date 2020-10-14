---
title: 'Tuning the Beast'
date: '2020-08-13'
spoiler: Review of LSTM Tuning Methods.
---

<!-- ![Tuning the Beast](St-George_3.jpg) -->

## Review of LSTM Tuning Methods for Forecasting Time Series

Long Short-Term Memory networks (LSTMs) are a special type of Recurrent Neural Network (RNN) specifically designed to capture long-term
correlations in a sequence without producing the technical issues of vanishing or exploding gradients during
training associated with RNNs. Other benefits of LSTMs for sequence prediction are:

1.  Internal memory state that can learn the temporal structure of the inputs
2.  Ability to learn multiple parallel input sequences separately
3.  Does't require a fixed window for input/output sequences like a multilayer perceptron (MLP)

**What is an LSTM?** An LSTM network consists of sequential **Memory Blocks** composed of three sets of weights and gates:

**Weights**

1. Input weights
2. Output weights
3. Internal State (Cell state)

**Gates**

1. Forget gate
2. Input gate
3. Output gate

