
In unmanned retail environments, the scarcity of human-labeled product images is a major obstacle. We adopted YOLOv3 for detection while synthesizing training data through advanced augmentation. Techniques such as cut-and-paste compositing, GP-GAN with content-loss blending, and complementary data-centric transformations expanded the dataset dramatically, enabling YOLOv3 to achieve robust, production-ready performance despite minimal manual labeling.
This project focused on developing deep learning algorithms to improve object detection and tracking capabilities specifically tailored for unmanned stores.
<br>

## **Key Aspects**

1. **Raise detection accuracy** with less annotation cost.  
2. **Maintain millisecond-level latency** on low-power, embedded hardware.

<br><br>

---

## **Methodology**

<br>

<!-- Tailwind-styled table for augmentation stages -->
<div class="overflow-x-auto rounded-lg shadow">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <!-- header -->
    <thead class="bg-slate-800 dark:bg-slate-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-center text-sm font-semibold tracking-wide text-white">
          Stage
        </th>
        <th scope="col" class="px-4 py-3 text-left text-sm font-semibold tracking-wide text-white">
          Technique
        </th>
        <th scope="col" class="px-4 py-3 text-center text-sm font-semibold tracking-wide text-white">
          mAP (%)
        </th>
        <th scope="col" class="px-4 py-3 text-left text-sm font-semibold tracking-wide text-white">
          Key Insight
        </th>
      </tr>
    </thead>
    <!-- body -->
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <!-- Stage 1 -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-slate-800 dark:even:bg-slate-900">
        <td class="px-4 py-2 text-center text-sm">1</td>
        <td class="px-4 py-2 text-sm">Human-labeled baseline</td>
        <td class="px-4 py-2 text-center text-sm">82.68</td>
        <td class="px-4 py-2 text-sm">
          Establish reference accuracy with fully annotated images
        </td>
      </tr>
      <!-- Stage 2 -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-slate-800 dark:even:bg-slate-900">
        <td class="px-4 py-2 text-center text-sm">2</td>
        <td class="px-4 py-2 text-sm">
          Plain Cut & Paste Auto-Labeling (<code>merge_multi.py</code>)
        </td>
        <td class="px-4 py-2 text-center text-sm">42.30</td>
        <td class="px-4 py-2 text-sm">
          Simple background compositing reveals domain gap
        </td>
      </tr>
      <!-- Stage 3 -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-slate-800 dark:even:bg-slate-900">
        <td class="px-4 py-2 text-center text-sm">3</td>
        <td class="px-4 py-2 text-sm">
          Augmented Cut & Paste (perspective warp, color jitter, HDR)
        </td>
        <td class="px-4 py-2 text-center text-sm">49.26</td>
        <td class="px-4 py-2 text-sm">
          Adds lighting & viewpoint diversity
        </td>
      </tr>
      <!-- Stage 4 -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-slate-800 dark:even:bg-slate-900">
        <td class="px-4 py-2 text-center text-sm">4</td>
        <td class="px-4 py-2 text-sm">GP-GAN + Content Loss</td>
        <td class="px-4 py-2 text-center text-sm">55.78</td>
        <td class="px-4 py-2 text-sm">
          Photorealistic blending removes hard edges in synthetics
        </td>
      </tr>
      <!-- Stage 5 -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-slate-800 dark:even:bg-slate-900">
        <td class="px-4 py-2 text-center text-sm">5</td>
        <td class="px-4 py-2 text-sm">PNG Alpha Compositing</td>
        <td class="px-4 py-2 text-center text-sm">62.77</td>
        <td class="px-4 py-2 text-sm">
          Preserves foreground integrity after GAN artifacts
        </td>
      </tr>
      <!-- Stage 6 -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-slate-800 dark:even:bg-slate-900">
        <td class="px-4 py-2 text-center text-sm">6</td>
        <td class="px-4 py-2 text-sm">Unified Set&nbsp;(auto + human)</td>
        <td class="px-4 py-2 text-center text-sm">&gt;&nbsp;82.68*</td>
        <td class="px-4 py-2 text-sm">
          Combines strengths of both sources; consistently surpasses baseline
        </td>
      </tr>
    </tbody>
  </table>
</div>

\*Exact score varies by shelf layout but always exceeds the fully human-labeled reference.

---

## **Multi-Modal Enhancements**

- **Tri-View Camera Array** – Front, left, and right RGB cameras provide complementary angles, recovering items hidden from a single viewpoint.  
- **Weight-Sensor Fusion** – Four load cells per shelf section supply mass-change cues that disambiguate visually similar SKUs and recover hidden pick/return events, boosting per-event recognition by **1.3×**.

<br><br>

---

## **Results**

| Metric | Baseline | Final System |
| ------ | -------- | ------------ |
| COCO-style **mAP** | 42.30 % (auto-label only) | **82 %+** |
| **End-to-End Latency** | — | **\< 120 ms** |
| **Inference Throughput** | — | **45 fps** on Jetson NX @ \< 10 W |
| **False-Negative Rate (heavy occlusion)** | 14 % | **4 %** |

<br><br>

---

## **My Contributions**

1. **Algorithm Engineering** – Designed the six-stage data-synthesis pipeline (GP-GAN, alpha-matting, stochastic compositing).  
2. **Model Optimization** – Pruned and INT8-quantized YOLOv3 for Jetson NX / Orin deployment.  
3. **Sensor Fusion** – Calibrated the tri-camera rig, wrote Arduino/HX711 firmware, and implemented vision + weight fusion logic.  
4. **Experimental Lead** – Ran all mAP evaluations, ablation studies, and authored the technical report adopted as the rollout blueprint.

---

With the use of cut-and-paste, GP-GAN with Content Loss, PNG Alpha Compositioning, and a small portion of human labeled data, we found out that we can get the overall accuracy higher than the one with only the human labeled data.
