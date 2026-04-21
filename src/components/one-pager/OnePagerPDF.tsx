import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import type { OnePagerData } from '@/lib/one-pager-data';

const colors = {
  orange: '#F59E0B',
  orangeDark: '#D97706',
  black: '#0B0F19',
  gray: '#475569',
  grayLight: '#94A3B8',
  grayBg: '#F1F5F9',
  border: '#E2E8F0',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: colors.black,
    backgroundColor: colors.white,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 28,
    objectFit: 'contain',
  },
  headerName: {
    fontFamily: 'Helvetica-Oblique',
    fontSize: 22,
    color: colors.black,
  },
  headerBar: {
    flexDirection: 'row',
    height: 4,
    marginBottom: 16,
  },
  headerBarSegment1: {
    flex: 2,
    backgroundColor: colors.black,
  },
  headerBarSegment2: {
    flex: 1,
    backgroundColor: colors.orangeDark,
  },
  headerBarSegment3: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  pageTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
    color: colors.black,
    marginBottom: 14,
    letterSpacing: 1,
  },
  contentRow: {
    flexDirection: 'row',
    gap: 20,
  },
  contentCol: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  sectionLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: colors.black,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: 12,
    marginBottom: 4,
  },
  sectionValue: {
    fontSize: 10,
    color: colors.gray,
    lineHeight: 1.45,
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  metaLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: colors.black,
    width: 100,
  },
  metaValue: {
    fontSize: 9,
    color: colors.gray,
    flex: 1,
  },
  headshot: {
    width: 150,
    height: 150,
    objectFit: 'cover',
    borderRadius: 4,
    borderWidth: 6,
    borderColor: colors.white,
    marginBottom: 8,
  },
  headshotPanel: {
    width: 170,
    flexShrink: 0,
    alignItems: 'center',
  },
  headshotBadge: {
    backgroundColor: colors.orange,
    color: colors.white,
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 2,
    marginTop: 2,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  listNumber: {
    fontFamily: 'Helvetica-Bold',
    color: colors.orange,
    width: 14,
    fontSize: 10,
  },
  listBullet: {
    color: colors.orange,
    width: 12,
    fontSize: 10,
  },
  listCheck: {
    color: colors.orangeDark,
    width: 12,
    fontSize: 10,
  },
  listText: {
    flex: 1,
    fontSize: 10,
    color: colors.gray,
    lineHeight: 1.4,
  },
  topsBlock: {
    borderLeftWidth: 3,
    borderLeftColor: colors.orange,
    paddingLeft: 10,
    marginBottom: 12,
  },
  topsLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: colors.black,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  topsValue: {
    fontSize: 10,
    color: colors.gray,
    lineHeight: 1.45,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
  },
  footerText: {
    fontSize: 8,
    color: colors.grayLight,
  },
  footerBrand: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: colors.orangeDark,
  },
  bioIntroBar: {
    backgroundColor: colors.grayBg,
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
  },
  bioIntroText: {
    fontSize: 9,
    color: colors.gray,
    lineHeight: 1.4,
  },
  contactBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    backgroundColor: colors.black,
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactLabel: {
    fontFamily: 'Helvetica-Bold',
    color: colors.orange,
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginRight: 4,
  },
  contactValue: {
    color: colors.white,
    fontSize: 9,
  },
  websitesWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  websiteChip: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: colors.orangeDark,
    backgroundColor: colors.grayBg,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});

type Props = {
  data: OnePagerData;
  logoSrc: string;
  headshotSrc?: string;
};

function Header({ name, logoSrc }: { name: string; logoSrc: string }) {
  return (
    <>
      <View style={styles.headerRow}>
        <Image style={styles.logo} src={logoSrc} />
        <Text style={styles.headerName}>{name}</Text>
      </View>
      <View style={styles.headerBar}>
        <View style={styles.headerBarSegment1} />
        <View style={styles.headerBarSegment2} />
        <View style={styles.headerBarSegment3} />
      </View>
    </>
  );
}

function Footer({ website }: { website?: string }) {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerBrand}>PM CONSULTING INC.</Text>
      <Text style={styles.footerText}>{website || 'pmconsulting.ca'}</Text>
    </View>
  );
}

function PersonalBioPage({ data, logoSrc, headshotSrc }: Props) {
  return (
    <Page size="LETTER" style={styles.page}>
      <Header name={data.name} logoSrc={logoSrc} />
      <Text style={styles.pageTitle}>PERSONAL BIO</Text>

      <View style={styles.contentRow}>
        <View style={styles.contentCol}>
          <View style={styles.bioIntroBar}>
            <Text style={styles.bioIntroText}>
              {data.name} | {data.businessName}
              {data.website ? ` | ${data.website}` : ''}
            </Text>
          </View>

          {data.email || data.phone ? (
            <View style={styles.contactBar}>
              {data.email ? (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Email</Text>
                  <Text style={styles.contactValue}>{data.email}</Text>
                </View>
              ) : null}
              {data.phone ? (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Phone</Text>
                  <Text style={styles.contactValue}>{data.phone}</Text>
                </View>
              ) : null}
            </View>
          ) : null}

          {data.websites && data.websites.length > 0 ? (
            <View style={styles.websitesWrap}>
              {data.websites.map((w, i) => (
                <Text key={i} style={styles.websiteChip}>
                  {w}
                </Text>
              ))}
            </View>
          ) : null}

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Years in Business:</Text>
            <Text style={styles.metaValue}>{data.yearsOfBusiness}</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>City of Residence:</Text>
            <Text style={styles.metaValue}>
              {data.cityOfResidence}
              {data.yearsInCity ? ` (${data.yearsInCity} years)` : ''}
            </Text>
          </View>
          {data.spouse ? (
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Spouse:</Text>
              <Text style={styles.metaValue}>{data.spouse}</Text>
            </View>
          ) : null}
          {data.totalChildren ? (
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Children:</Text>
              <Text style={styles.metaValue}>
                {data.totalChildren}
                {data.children ? ` (${data.children})` : ''}
              </Text>
            </View>
          ) : null}
          {data.pets ? (
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Pets:</Text>
              <Text style={styles.metaValue}>{data.pets}</Text>
            </View>
          ) : null}

          <Text style={styles.sectionLabel}>Previous Types of Jobs</Text>
          <Text style={styles.sectionValue}>{data.previousJobs}</Text>

          <Text style={styles.sectionLabel}>Burning Desire</Text>
          <Text style={styles.sectionValue}>{data.burningDesire}</Text>

          <Text style={styles.sectionLabel}>Something No One Here Knows About Me</Text>
          <Text style={styles.sectionValue}>{data.somethingNoOneKnows}</Text>

          <Text style={styles.sectionLabel}>Key to Success</Text>
          <Text style={styles.sectionValue}>{data.keyToSuccess}</Text>
        </View>

        {headshotSrc ? (
          <View style={styles.headshotPanel}>
            <Image style={styles.headshot} src={headshotSrc} />
            <Text style={styles.headshotBadge}>{data.businessName}</Text>
          </View>
        ) : null}
      </View>

      <Footer website={data.website} />
    </Page>
  );
}

function GainsPage({ data, logoSrc }: Props) {
  return (
    <Page size="LETTER" style={styles.page}>
      <Header name={data.name} logoSrc={logoSrc} />
      <Text style={styles.pageTitle}>GAINS (2026)</Text>

      <View style={styles.contentRow}>
        <View style={styles.contentCol}>
          <Text style={styles.sectionLabel}>Goals</Text>
          {data.gains.goals.map((g, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={styles.listNumber}>{i + 1}.</Text>
              <Text style={styles.listText}>{g}</Text>
            </View>
          ))}

          <Text style={styles.sectionLabel}>Accomplishments</Text>
          {data.gains.accomplishments.map((a, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={styles.listNumber}>{i + 1}.</Text>
              <Text style={styles.listText}>{a}</Text>
            </View>
          ))}

          <Text style={styles.sectionLabel}>Interests</Text>
          {data.gains.interests.map((item, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={styles.listBullet}>{'▸'}</Text>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.contentCol}>
          <Text style={styles.sectionLabel}>Networks</Text>
          {data.gains.networks.map((n, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={styles.listBullet}>{'▸'}</Text>
              <Text style={styles.listText}>{n}</Text>
            </View>
          ))}

          <Text style={styles.sectionLabel}>Skills</Text>
          {data.gains.skills.map((s, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={styles.listCheck}>{'✓'}</Text>
              <Text style={styles.listText}>{s}</Text>
            </View>
          ))}
        </View>
      </View>

      <Footer website={data.website} />
    </Page>
  );
}

function TopsPage({ data, logoSrc }: Props) {
  return (
    <Page size="LETTER" style={styles.page}>
      <Header name={data.name} logoSrc={logoSrc} />
      <Text style={styles.pageTitle}>TOPS</Text>

      <View style={styles.topsBlock}>
        <Text style={styles.topsLabel}>Top Product</Text>
        <Text style={styles.topsValue}>{data.tops.topProduct}</Text>
      </View>

      <View style={styles.topsBlock}>
        <Text style={styles.topsLabel}>Top Problem Solved</Text>
        <Text style={styles.topsValue}>{data.tops.topProblemSolved}</Text>
      </View>

      <View style={styles.topsBlock}>
        <Text style={styles.topsLabel}>Ideal Referral</Text>
        <Text style={styles.topsValue}>{data.tops.idealReferral}</Text>
      </View>

      <View style={styles.topsBlock}>
        <Text style={styles.topsLabel}>Ideal Partner</Text>
        <Text style={styles.topsValue}>{data.tops.idealPartner}</Text>
      </View>

      <View style={styles.topsBlock}>
        <Text style={styles.topsLabel}>Favorite BNI Story</Text>
        <Text style={styles.topsValue}>{data.tops.favoriteBniStory}</Text>
      </View>

      <Footer website={data.website} />
    </Page>
  );
}

export function OnePagerPDF({ data, logoSrc, headshotSrc }: Props) {
  return (
    <Document
      title={`${data.name} BNI One-Pager`}
      author={data.name}
      subject={`${data.name} Personal Profile`}
    >
      <PersonalBioPage data={data} logoSrc={logoSrc} headshotSrc={headshotSrc} />
      <GainsPage data={data} logoSrc={logoSrc} />
      <TopsPage data={data} logoSrc={logoSrc} />
    </Document>
  );
}
