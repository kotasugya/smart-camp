import { MetaProps } from '@/components/atoms/meta';

interface MetaConfig {
  // キャンプ場
  a1: MetaProps;
  a2: MetaProps;
  a3: MetaProps;
  a4: MetaProps;
  a5: MetaProps;
  a6: MetaProps;

  // ユーザー
  b1: MetaProps;
  b2: MetaProps;

  // 認証
  c1: MetaProps;
  c2: MetaProps;
}

export const APP_NAME: string = process.env.NEXT_APP_NAME || 'Smart Camp';
export const metaConfig: MetaConfig = {
  a1: {
    title: APP_NAME,
    description: '宇宙最大のキャンプ場検索サービス',
  },
  a2: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  a3: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  a4: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  a5: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  a6: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  b1: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  b2: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  c1: {
    title: `- ${APP_NAME}`,
    description: '',
  },
  c2: {
    title: `- ${APP_NAME}`,
    description: '',
  },
};
