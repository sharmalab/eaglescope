import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { RECOMMEND_THRESHOLD } from '../../common/dataAnalysis';

const CHART_LABELS = {
  PIE_CHART: 'Pie',
  BAR_CHART: 'Bar',
  HORIZONTAL_BAR_CHART: 'H-Bar',
  HISTOGRAM: 'Histogram',
  SCATTER_CHART: 'Scatter',
  DENSITY_2D: 'Density 2D',
  PARALLEL_COORDINATES: 'Parallel',
  HEATMAP: 'Heatmap',
  VIS_DATA_TABLE: 'Table',
};

function VisRecommendations({
  recommendations, selected, onToggle, onToggleAll,
}) {
  const allSelected = recommendations.every((r) => selected.has(r.config.id));

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <small className="text-muted">
          {selected.size}
          {' '}
          of
          {recommendations.length}
          {' '}
          selected
        </small>
        <Button variant="link" size="sm" className="p-0" onClick={onToggleAll}>
          {allSelected ? 'Clear all' : 'Select all'}
        </Button>
      </div>
      <ListGroup>
        {recommendations.map((rec) => {
          const checked = selected.has(rec.config.id);
          const isTopPick = rec.score >= RECOMMEND_THRESHOLD;
          return (
            <ListGroup.Item
              key={rec.config.id}
              variant={isTopPick ? 'light' : undefined}
              className="py-2 px-3"
            >
              <div className="d-flex align-items-start gap-2">
                <Form.Check
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(rec.config.id)}
                  className="mt-1 flex-shrink-0"
                />
                <div className="flex-grow-1 min-width-0">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="fw-semibold">{rec.config.title}</span>
                    <Badge bg="secondary" className="fw-normal" style={{ fontSize: '0.7em' }}>
                      {CHART_LABELS[rec.chartType] || rec.chartType}
                    </Badge>
                  </div>
                  <div className="text-muted" style={{ fontSize: '0.82em' }}>{rec.rationale}</div>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

VisRecommendations.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      chartType: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      rationale: PropTypes.string.isRequired,
      config: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  selected: PropTypes.instanceOf(Set).isRequired,
  onToggle: PropTypes.func.isRequired,
  onToggleAll: PropTypes.func.isRequired,
};

export default VisRecommendations;
