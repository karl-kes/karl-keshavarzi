export const projects = [
  {
    title: '3D Heat Solver',
    description: 'A C++ solver for the 3D heat equation using an explicit forward Euler finite-difference scheme, with dual-backend CPU (OpenMP/SIMD) and GPU (CUDA) execution from unified source. Achieves 60-68x GPU speedup at large grid sizes, validated against Neumann eigenfunction solutions.',
    tech: ['CUDA', 'C++20', 'OpenMP', 'CMake'],
    link: 'https://github.com/karl-kes/3d-heat-solver',
    paper: 'https://raw.githubusercontent.com/karl-kes/3d-heat-solver/main/docs/paper.pdf',
    equation: '∂T/∂t = α∇²T',
  },
  {
    title: 'Finite-Difference Maxwell Solver',
    description: 'A 3D Finite-Difference Time-Domain (FDTD) Maxwell Solver with CPML boundary conditions. Capable of simulating and visualizing electromagnetic vector fields. Parallelized with OpenMP (CUDA in progress).',
    tech: ['C++17', 'OpenMP', 'Python', 'Plotly'],
    link: 'https://github.com/karl-kes/Finite-Difference-Maxwell-Solver',
    equation: '∇×E = −∂B/∂t',
  },
  {
    title: 'N-Body Gravity Engine',
    description: 'An N-body engine capable of simulating gravity using Newtonian Mechanics. Uses symplectic integration to conserve energy; validated against NASA JPL Horizons data.',
    tech: ['C++17', 'OpenMP', 'Python', 'MatPlotLib'],
    link: 'https://github.com/karl-kes/N-Body-Physics-Engine',
    paper: 'https://raw.githubusercontent.com/karl-kes/N-Body-Physics-Engine/main/docs/N_Body_Technical_Paper.pdf',
    equation: 'F = Gm₁m₂/r²',
  },
  {
    title: 'Variational Monte Carlo',
    description: 'A Variational Monte Carlo engine simulating the homogeneous electron gas, built as part of UW High Performance Computing. Uses a trial wavefunction and stochastic optimization to estimate ground-state energies.',
    tech: ['C++23', 'CMake', 'Catch2', 'Python'],
    link: 'https://github.com/UWHPC/Variational-Monte-Carlo',
    equation: 'E[Ψ] = ⟨Ψ|H|Ψ⟩',
  },
];
