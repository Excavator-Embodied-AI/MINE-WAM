# MINE-WAM Project Page

Static project page for **MINE-WAM: A LiDAR–RGB Multimodal World–Action Model with INjected Elevation for Real-World Autonomous Loading**.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## GitHub Pages

The site uses only relative URLs and can be deployed from the repository root.

1. Create a repository named `MINE-WAM.github.io`.
2. Push this directory to the repository's `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. The project page will be available at `https://<owner>.github.io/MINE-WAM.github.io/`.

## Release links

Paper, code, dataset, and citation are intentionally marked **Coming soon**. When they are public, replace the corresponding buttons in `index.html` with links and add the final BibTeX entry.

## Asset policy

Large source videos, Draw.io files, presentations, and experimental records are intentionally excluded by `.gitignore`. Only web-optimized derivatives in `assets/` should be committed.

