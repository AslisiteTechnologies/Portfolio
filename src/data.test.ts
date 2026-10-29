import { describe, expect, it } from 'vitest'
import { filterProjects, projects } from './data'

describe('project portfolio data', () => {
  it('contains twelve uniquely identified fictional concepts with complete gallery content', () => {
    expect(projects).toHaveLength(12)
    expect(new Set(projects.map(project => project.id)).size).toBe(12)
    expect(new Set(projects.map(project => project.slug)).size).toBe(12)
    for (const project of projects) {
      expect(project.gallery.length).toBeGreaterThanOrEqual(3)
      expect(project.materials.length).toBeGreaterThanOrEqual(3)
      expect(project.description.length).toBeGreaterThan(20)
      expect(project.objective.length).toBeGreaterThan(20)
      expect(project.approach.length).toBeGreaterThan(20)
    }
  })

  it('returns the full collection for All and only matching categories for filters', () => {
    expect(filterProjects('All')).toEqual(projects)
    expect(filterProjects('Hospitality').map(p => p.category)).toEqual(['Boutique Hotel','Restaurant'])
    expect(filterProjects('Adaptive Reuse').map(p => p.slug)).toEqual(['the-old-press'])
    expect(filterProjects('Unknown')).toEqual([])
  })
})
