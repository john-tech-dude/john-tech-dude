# Nazumi Ronin Staking Implementation Plan

## Platform: StakePoint (Recommended)

**Why StakePoint is the Best Fit:**
- ✅ **Purpose-built for Solana SPL tokens** — Supports custom tokens like NAZUMI
- ✅ **Non-custodial** — All funds in PDAs, no private keys, fully trustless
- ✅ **No code required** — Launch in ~5 minutes with simple interface
- ✅ **Audited security** — CPK Solutions audit, Squads multisig upgrade authority
- ✅ **Flexible rewards** — Same-token, dual-token, or LP farm options
- ✅ **Website integration** — Embeddable iframe widget for your site
- ✅ **Narrative alignment** — "Warrior training" theme fits staking mechanics

---

## Implementation Overview

### Timeline
- **Pre-Launch:** Prepare pool parameters and reward allocation
- **Post-Graduation:** Launch staking pool within 24-48 hours of PumpSwap migration
- **Ongoing:** Monitor and adjust rewards based on community growth

### Cost Breakdown
- **Pool Creation:** 1 SOL (one-time fee)
- **Platform Fee:** 2% on staking transactions
- **Reward Budget:** Variable (recommend 1-5% of supply for initial rewards)
- **Total Initial Investment:** ~2-5 SOL depending on reward allocation

---

## Pool Configuration Options

### Option A: Same-Token Pool (Recommended for Launch)
**How it works:** Holders stake NAZUMI, earn NAZUMI rewards

**Configuration:**
- **Staking Token:** NAZUMI (your token)
- **Reward Token:** NAZUMI (same token)
- **Pool Duration:** 365 days (recommended for stability)
- **Minimum Lock Period:** 0 days (flexible) or 7/30/90 days (tiered)
- **Reward Amount:** 10M-50M NAZUMI (1-5% of supply)

**Pros:**
- Simple for users to understand
- Reduces circulating supply (deflationary)
- Aligns incentives with holding
- No additional token purchases needed

**Cons:**
- Requires token budget for rewards
- Dilutes supply if rewards are significant

**Best for:** Initial launch, community building, lore unlocks

### Option B: Dual-Token Pool
**How it works:** Holders stake NAZUMI, earn different token (SOL, USDC, partner token)

**Configuration:**
- **Staking Token:** NAZUMI
- **Reward Token:** SOL or USDC (or partner token)
- **Pool Duration:** 365 days
- **Minimum Lock Period:** 0-90 days
- **Reward Amount:** Variable based on budget

**Pros:**
- No dilution of NAZUMI supply
- Can partner with other projects for rewards
- More attractive to yield seekers

**Cons:**
- Requires purchasing reward tokens
- More complex for users
- Less aligned with token holding incentives

**Best for:** Later phases, partnerships, advanced users

### Option C: LP Farm (Advanced)
**How it works:** LP providers stake Raydium/Meteora LP tokens, earn NAZUMI

**Configuration:**
- **Staking Token:** LP tokens from PumpSwap/Raydium pool
- **Reward Token:** NAZUMI
- **Pool Duration:** 365 days
- **Minimum Lock Period:** 0-30 days
- **Reward Amount:** 5M-20M NAZUMI

**Pros:**
- Deepens liquidity
- Rewards long-term LPs
- Reduces sell pressure

**Cons:**
- More complex for users
- Requires existing liquidity
- Smaller user base initially

**Best for:** Post-graduation, liquidity growth phase

---

## Recommended Strategy for Nazumi Ronin

### Phase 1: Initial Staking Pool (Post-Graduation)
**Timeline:** Within 1 week of PumpSwap graduation

**Configuration:**
- **Type:** Same-Token Pool
- **Rewards:** 25M NAZUMI (2.5% of supply)
- **Duration:** 365 days
- **Lock Period:** 0 days (flexible staking)
- **APR Target:** 20-50% (varies with participation)

**Narrative Integration:**
- "Warrior's Training Grounds" — staking = training for the path ahead
- "Clan Initiation" — staking unlocks Clan Scrolls access
- "Ronin's Discipline" — longer stakes = higher Clan Ranks

**Community Messaging:**
```
"The path of the ronin requires discipline. Stake your NAZUMI to train, earn rewards, and unlock hidden chapters of the clan's story."
```

### Phase 2: Enhanced Staking (3-6 months post-launch)
**Timeline:** After initial community growth

**Additions:**
- **Tiered Lock Periods:** 7/30/90 day options with higher rewards
- **Dual-Token Option:** Stake NAZUMI, earn SOL or partner tokens
- **LP Farm:** For liquidity providers
- **Governance Integration:** Staking = voting power on lore decisions

**Narrative Integration:**
- "Elder Training" — longer commitments = deeper lore access
- "Clan Council" — stakers vote on story directions
- "Warrior's Ascent" — staking tiers unlock exclusive content

### Phase 3: Advanced Features (6-12 months)
**Timeline:** Mature community phase

**Additions:**
- **Multiple Pools:** Different reward structures for different use cases
- **Partner Pools:** Cross-project staking for ecosystem growth
- **NFT Integration:** Stake NFTs for additional rewards
- **Governance Token:** If implementing full DAO

---

## Technical Implementation Steps

### Step 1: Pre-Launch Preparation
- [ ] Decide on reward allocation (recommend 25M NAZUMI = 2.5% supply)
- [ ] Prepare pool parameters (duration, lock periods, APR targets)
- [ ] Create marketing materials explaining staking benefits
- [ ] Set up Telegram notifications (@StakePointStakingBot)
- [ ] Plan website integration (iframe widget placement)

### Step 2: Post-Graduation Launch
- [ ] Wait for PumpSwap graduation (~$69K market cap)
- [ ] Connect wallet to StakePoint
- [ ] Create staking pool with configured parameters
- [ ] Deposit reward tokens (NAZUMI) into pool vault
- [ ] Pay 1 SOL creation fee
- [ ] Sign 2 deployment transactions
- [ ] Verify pool is live on-chain
- [ ] Share pool link with community

### Step 3: Website Integration
- [ ] Add staking widget to your website (iframe embed)
- [ ] Create dedicated staking page or section
- [ ] Link from main navigation and utility section
- [ ] Add staking info to Clan Scrolls documentation
- [ ] Update roadmap to reflect staking launch

### Step 4: Community Launch
- [ ] Announce staking pool in Discord/Telegram
- [ ] Create educational content ("How to Stake NAZUMI")
- [ ] Host staking competition or airdrop for early stakers
- [ ] Monitor pool metrics and adjust rewards if needed
- [ ] Gather community feedback for improvements

---

## Website Integration Details

### Current Website Structure
Your site already has:
- **Utility Section** — "The Path Beyond" with Clan Scrolls, Clan Ranks, etc.
- **Roadmap** — Future phases including staking
- **Docs Page** — Technical documentation
- **Clan Scrolls Page** — Lore and story content

### Recommended Additions

#### 1. Update Utility Section (index.html)
Add staking panel to "The Path Beyond":
```html
<div class="panel panel-md">
  <div class="arc-header">
    <div class="arc-number">修</div>
    <div class="arc-title">Warrior's Training</div>
  </div>
  <p class="utility-description">
    Stake your NAZUMI to train, earn rewards, and unlock deeper lore. Longer commitments yield greater wisdom.
  </p>
  <div style="margin-top: 1rem; text-align: center;">
    <a href="staking.html" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 1rem;">Enter Training Grounds</a>
  </div>
</div>
```

#### 2. Create Staking Page (staking.html)
New dedicated page with:
- Embedded StakePoint iframe widget
- Explanation of staking mechanics
- Clan Rank integration (staking tiers)
- Clan Scrolls unlock information
- FAQ about staking

#### 3. Update Clan Scrolls Page
Add staking requirements for premium content:
- "Hold X NAZUMI to unlock Chapter Y"
- "Stake for Z days to access exclusive lore"
- Link staking tiers to Clan Ranks

#### 4. Update Documentation (docs.html)
Add "Staking" section covering:
- How staking works
- Reward mechanics
- Lock periods and benefits
- Integration with Clan Ranks
- Security and audits

---

## Reward Economics Analysis

### Initial Pool Economics
**Assumptions:**
- Total Supply: 1B NAZUMI
- Reward Pool: 25M NAZUMI (2.5%)
- Pool Duration: 365 days
- Daily Distribution: ~68,493 NAZUMI/day

**APR Scenarios:**
| Total Staked | Daily Rewards | APR (Annualized) |
|--------------|---------------|------------------|
| 1M NAZUMI    | 68,493        | ~2,500%          |
| 10M NAZUMI   | 68,493        | ~250%            |
| 50M NAZUMI   | 68,493        | ~50%             |
| 100M NAZUMI  | 68,493        | ~25%             |
| 250M NAZUMI  | 68,493        | ~10%             |

**Recommendation:** Start with 25M rewards, monitor participation, adjust as needed.

### Long-term Sustainability
**Revenue Sources:**
- Creator fees from trading volume
- Staking pool creation fees (if others create pools)
- NFT royalties (future)
- Merchandise licensing (future)

**Cost Centers:**
- Development and audits
- Marketing and community
- Operations and legal
- Treasury reserves

---

## Risk Considerations

### Technical Risks
- **Platform dependency:** StakePoint could have issues (mitigated by non-custodial design)
- **Smart contract bugs:** Audited, but always DYOR
- **Oracle manipulation:** APR calculations based on token price

### Market Risks
- **Low participation:** Pool may have few stakers initially
- **High dilution:** Too many rewards could devalue token
- **Competition:** Other projects may offer better yields

### Regulatory Risks
- **Securities classification:** Staking rewards may be considered yield
- **Jurisdiction:** Different countries have different rules
- **Tax implications:** Staking rewards may be taxable events

### Mitigation Strategies
- **Start small:** Test with modest rewards first
- **Monitor closely:** Adjust parameters based on participation
- **Legal review:** Consult counsel on regulatory implications
- **Transparency:** Clear communication about mechanics and risks

---

## Success Metrics

### Launch Metrics (First 30 days)
- [ ] Pool creation successful
- [ ] At least 50 unique stakers
- [ ] 5M+ NAZUMI staked
- [ ] 20%+ APR achieved
- [ ] Website widget functional
- [ ] Community engagement positive

### Growth Metrics (90 days)
- [ ] 200+ unique stakers
- [ ] 25M+ NAZUMI staked
- [ ] Clan Scrolls integration live
- [ ] Clan Ranks tied to staking tiers
- [ ] Dual-token pool consideration
- [ ] LP farm evaluation

### Long-term Metrics (12 months)
- [ ] 500+ unique stakers
- [ ] 100M+ NAZUMI staked
- [ ] Multiple pool types active
- [ ] Governance integration
- [ ] NFT staking rewards
- [ ] Community treasury funded

---

## Alternative Options (If StakePoint Doesn't Work)

### Option B: BlazeStake
- Similar to StakePoint
- Different fee structure
- Worth comparing if StakePoint unavailable

### Option C: Custom Anchor Program
- Full control over mechanics
- Requires development and audit
- Higher cost but maximum flexibility
- Only recommended if volume justifies investment

### Option D: Off-Chain Staking
- Manual reward distribution
- No smart contract needed
- Good for very early stage
- Harder to scale

---

## Next Steps

1. **Review this plan** with your team
2. **Decide on reward allocation** (recommend 25M NAZUMI)
3. **Prepare marketing materials** for staking launch
4. **Wait for pump.fun graduation** (~$69K market cap)
5. **Create staking pool** on StakePoint within 24-48 hours
6. **Integrate with website** (staking page, utility section, docs)
7. **Launch community campaign** to drive staking participation
8. **Monitor and optimize** based on early results

---

## Resources

- **StakePoint:** https://stakepoint.app
- **Create Pool:** https://stakepoint.app/for-projects
- **Documentation:** https://stakepoint.app/docs
- **Security Audit:** https://stakepoint.app/security
- **Program ID:** `gLHaGJsZ6G7AXZxoDL9EsSWkRbKAWhFHi73gVfNXuzK`

---

**Note:** This plan assumes pump.fun launch with graduation to PumpSwap. Adjust timing and parameters based on actual launch progress and community growth.
