import type { CampaignType } from '@/types'

export async function fetchCampaigns(
  cache?: 'force-cache' | 'no-store' | { next: { revalidate: number } }
): Promise<CampaignType[]> {
  try {
    const endPoint = `${process.env.PUBLIC_NEXT_URL}/api/campaigns/`

    const options = typeof cache === 'object' ? { ...cache } : { cache }

    const res = cache ? await fetch(endPoint, options) : await fetch(endPoint)

    if (!res.ok) {
      throw new Error(`Failed to fetch campaigns data. Status: ${res.status}`)
    }

    return res.json() as Promise<CampaignType[]>
  } catch (error) {
    console.error('Error during fetchCampaigns:', error)
    throw error
  }
}
