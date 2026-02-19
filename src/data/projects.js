export const projects = [
  {
    title: 'Finite-Difference Maxwell Solver',
    description: 'A 3D Finite-Difference Time-Domain (FDTD) Maxwell Solver with CPML boundary conditions. Capable of simulating and visualizing electromagnetic vector fields. Parallelized with OpenMP (CUDA in progress).',
    tech: ['C++', 'OpenMP', 'Python', 'Plotly'],
    link: 'https://github.com/karl-kes/Finite-Difference-Maxwell-Solver',
    equation: '∇×E = −∂B/∂t',
  },
  {
    title: 'N-Body Gravity Engine',
    description: 'An N-body engine capable of simulating gravity using Newtonian Mechanics. Uses symplectic integration to conserve energy; validated against NASA JPL Horizons data.',
    tech: ['C++', 'OpenMP', 'Python', 'MatPlotLib'],
    link: 'https://github.com/karl-kes/N-Body-Physics-Engine',
    equation: 'F = Gm₁m₂/r²',
  },
  {
    title: 'ExoDiscover - NASA Hackathon',
    description: 'Trained XGBoost/CNN models with NASA data to detect and verify exoplanets and false positives. Top 4 finish among 150 participants.',
    tech: ['Python', 'Flask', 'React', 'Three.js'],
    link: 'https://github.com/wentingcoding960206/ExoDiscover',
    equation: 'L ∝ R²T⁴',
  },
  {
    title: 'K1 Racing',
    description: 'Racing simulator game inspired by Formula One and Mario Kart. Built as an early programming project exploring game physics and graphics.',
    tech: ['Java Processing'],
    link: 'https://github.com/karl-kes/K1-Racing',
  },
];
