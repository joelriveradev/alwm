export interface Song {
  id: string
  title: string
  scripture?: string
  published: Date
  description: string
  url: string
}

export async function getScriptureSongs(): Promise<Array<Song>> {
  return [
    {
      id: '1',
      title: 'For God Who Commanded',
      scripture: '2 Corinthians 4:6',
      description:
        'God, who called light out of darkness, shines in our hearts, giving us the hope to face life’s trials with His eternal glory within us.',
      published: new Date('2012-10-04'),
      url: '/songs/1.mp4',
    },
    {
      id: '2',
      title: 'Unto The King Immortal',
      scripture: '1 Timothy 1:17',
      description:
        'Praise the eternal King! His power and wisdom guide us, filling our hearts with hope, peace, and purpose that transcend this life.',
      published: new Date('2012-10-04'),
      url: '/songs/2.mp4',
    },
    {
      id: '3',
      title: 'Create In Me A Clean Heart',
      scripture: 'Psalm 51:10',
      description:
        'In seeking God’s cleansing, we find new beginnings. His mercy renews us, shaping our hearts to walk in purity and His perfect will.',
      published: new Date('2012-10-04'),
      url: '/songs/3.mp4',
    },
    {
      id: '4',
      title: 'And This Is Life Eternal',
      scripture: 'John 17:3',
      description:
        'True life is found in knowing God and His Son, Jesus. This relationship fills us with hope and a future, anchored in eternity.',
      published: new Date('2012-10-04'),
      url: '/songs/4.mp4',
    },
    {
      id: '5',
      title: 'Ho, Every One That Thirsteth',
      scripture: 'Isaiah 55:1-2',
      description:
        'God invites all to come and be satisfied. His love is a fountain of life that refreshes our weary souls and fills our deepest needs.',
      published: new Date('2012-10-04'),
      url: '/songs/5.mp4',
    },
    {
      id: '6',
      title: 'The Steps Of A Good Man',
      scripture: 'Psalm 37:23-24',
      description:
        'When we walk with God, He orders our steps, guiding us through life’s challenges and granting us peace as we trust in Him.',
      published: new Date('2012-10-04'),
      url: '/songs/6.mp4',
    },
    {
      id: '7',
      title: 'He Shall Feed His Flock',
      scripture: 'Isaiah 40:11',
      description:
        'Like a shepherd, God lovingly leads and nourishes us. In His care, we find comfort and rest, knowing we are never alone.',
      published: new Date('2012-10-04'),
      url: '/songs/7.mp4',
    },
    {
      id: '8',
      title: 'Trust In The Lord With All Thine Heart',
      scripture: 'Proverbs 3:6,11',
      description:
        'Trust in God completely, and He will guide your way. His wisdom is greater than our own, and His love lights the path ahead.',
      published: new Date('2012-10-04'),
      url: '/songs/8.mp4',
    },
    {
      id: '9',
      title: 'Search Me, O God',
      scripture: 'Psalm 139:23-24',
      description:
        'Invite God to search your heart, and in His grace, He will lead you in the way of life and hope, bringing peace to your soul.',
      published: new Date('2012-10-04'),
      url: '/songs/9.mp4',
    },
    {
      id: '10',
      title: 'Not By Might, Nor By Power',
      scripture: 'Zechariah 4:6',
      description:
        'Victory doesn’t come from our strength, but through God’s Spirit. In His power, we can overcome every obstacle we face.',
      published: new Date('2012-10-04'),
      url: '/songs/10.mp4',
    },
    {
      id: '11',
      title: 'I Am Crucified With Christ',
      scripture: 'Galatians 2:20',
      description:
        'Living for Christ means dying to self. His life in us brings true freedom, filling us with joy, purpose, and His transforming grace.',
      published: new Date('2012-10-04'),
      url: '/songs/11.mp4',
    },
    {
      id: '12',
      title: 'So Shall My Word Be That Goeth Forth',
      scripture: 'Isaiah 55:11',
      description:
        'God’s Word will never fail. It goes forth in power, bringing hope and accomplishing His purposes in your life and the world.',
      published: new Date('2012-10-04'),
      url: '/songs/12.mp4',
    },
    {
      id: '13',
      title: 'Be Strong And Of A Good Courage',
      scripture: 'Joshua 1:9',
      description:
        'Be courageous and trust in God’s presence. He will never leave you and gives strength to face every challenge with hope.',
      published: new Date('2012-10-04'),
      url: '/songs/13.mp4',
    },
    {
      id: '14',
      title: 'Present Your Bodies A Living Sacrifice',
      scripture: 'Romans 12:1',
      description:
        'Offer yourself to God as a living sacrifice. In surrendering to Him, you will discover true life, peace, and a renewed mind.',
      published: new Date('2012-10-04'),
      url: '/songs/14.mp4',
    },
    {
      id: '15',
      title: 'If Ye Then Be Risen With Christ',
      scripture: 'Colossians 3:1',
      description:
        'As believers, our hearts are set on things above. With Christ, we are raised to new life, filled with eternal hope and purpose.',
      published: new Date('2012-10-04'),
      url: '/songs/15.mp4',
    },
    {
      id: '16',
      title: 'Blessed Is Everyone That Feareth The Lord',
      scripture: 'Psalm 128:1-4',
      description:
        'Those who walk in reverence for God are richly blessed. His guidance and love bring joy, peace, and favor to every aspect of life.',
      published: new Date('2012-10-04'),
      url: '/songs/16.mp4',
    },
    {
      id: '17',
      title: 'The Steadfast Love',
      scripture: 'Lamentations 3:23',
      description:
        'God’s steadfast love never fails. His mercies are new each day, offering hope and strength for whatever challenges we face.',
      published: new Date('2012-10-04'),
      url: '/songs/17.mp4',
    },
    {
      id: '18',
      title: 'Therefore The Redeemed Of The Lord',
      scripture: 'Isaiah 51:11',
      description:
        'The redeemed will return to God with joy and everlasting peace. He wipes away all sorrow, replacing it with eternal hope.',
      published: new Date('2012-10-04'),
      url: '/songs/18.mp4',
    },
    {
      id: '19',
      title: 'Give Ear To My Words O Lord',
      scripture: 'Psalm 5:1',
      description:
        'God hears our prayers, and when we cry out to Him, He responds with guidance and peace in every storm.',
      published: new Date('2012-10-04'),
      url: '/songs/19.mp4',
    },
    {
      id: '20',
      title: 'Great Is The Lord And Greatly To Be Praised',
      scripture: 'Psalm 48:1-2',
      description:
        'God’s greatness is beyond measure. He is worthy of all our praise, and in Him, we find hope, strength, and joy.',
      published: new Date('2012-10-04'),
      url: '/songs/20.mp4',
    },
    {
      id: '21',
      title: 'I Will Sing Of The Mercies Of The Lord',
      scripture: 'Psalm 89:1',
      description:
        'Sing of God’s unfailing mercies! His faithfulness endures forever, giving us hope to face today and every tomorrow.',
      published: new Date('2012-10-04'),
      url: '/songs/21.mp4',
    },
    {
      id: '22',
      title: 'Seek Ye First The Kingdom Of God',
      scripture: 'Matthew 6:33',
      description:
        'Put God first in all you do, and He will provide everything you need. His kingdom offers peace, hope, and fulfillment.',
      published: new Date('2012-10-04'),
      url: '/songs/22.mp4',
    },
    {
      id: '23',
      title: 'A Merry Heart Doeth Good Like A Medicine',
      scripture: 'Proverbs 17:22',
      description:
        'A joyful heart brings healing and refreshment to the soul. In God, we find the joy that sustains us through life’s trials.',
      published: new Date('2012-10-04'),
      url: '/songs/23.mp4',
    },
    {
      id: '24',
      title: 'Hear My Cry O God',
      scripture: 'Psalm 61:1',
      description:
        'In moments of distress, call out to God. He hears your cry and will bring you comfort and strength in times of trouble.',
      published: new Date('2012-10-04'),
      url: '/songs/24.mp4',
    },
    {
      id: '25',
      title: 'The Law Of The Lord Is Perfect',
      scripture: 'Psalm 19:7',
      description:
        'God’s law is perfect and revives the soul. It brings wisdom and leads us in the way of life and righteousness.',
      published: new Date('2012-10-04'),
      url: '/songs/25.mp4',
    },
    {
      id: '26',
      title: 'But They That Wait Upon The Lord',
      scripture: 'Isaiah 40:31',
      description:
        'Those who wait on God will renew their strength. He lifts us up, giving us hope to soar above life’s struggles.',
      published: new Date('2012-10-04'),
      url: '/songs/26.mp4',
    },
    {
      id: '27',
      title: 'A New Heart Also Will I Give You',
      scripture: 'Ezekiel 36:26-28',
      description:
        'God promises to transform your heart, filling you with His Spirit and renewing your life with hope and purpose.',
      published: new Date('2012-10-04'),
      url: '/songs/27.mp4',
    },
  ]
}
